"use client";

import { useEffect, useState } from "react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

type Feedback = {
    sentiment: string;
    channel:string;
    status:string;
};

const COLORS = ["#22c55e", "#9ca3af", "#ef4444"];

export default function AnalyticsPage() {
    const [sentimentData, setSentimentData] = useState([
        { name: "Positive", value: 0 },
        { name: "Neutral", value: 0 },
        { name: "Negative", value: 0 },
    ]);
    const [channelData, setChannelData] = useState<
    { name: string; value: number }[]
>([]);
    const [statusData, setStatusData] = useState<
    { name: string; value: number }[]
>([]);

    useEffect(() => {
        async function getFeedback() {
            const response = await fetch("/api/feedback");
            const data: Feedback[] = await response.json();

            const positive = data.filter(
                (item) => item.sentiment === "positive"
            ).length;

            const neutral = data.filter(
                (item) => item.sentiment === "neutral"
            ).length;

            const negative = data.filter(
                (item) => item.sentiment === "negative"
            ).length;
const channelCounts = data.reduce(
    (counts: { [key: string]: number }, item: Feedback) => {
        const channel = item.channel || "Unknown";

        counts[channel] = (counts[channel] || 0) + 1;

        return counts;
    },
    {}
);

setChannelData(
    Object.entries(channelCounts).map(([name, value]) => ({
        name,
        value,
    }))
);
const statusCounts = data.reduce(
    (counts: { [key: string]: number }, item: Feedback) => {
        const status = item.status || "Unknown";

        counts[status] = (counts[status] || 0) + 1;

        return counts;
    },
    {}
);

setStatusData(
    Object.entries(statusCounts).map(([name, value]) => ({
        name,
        value,
    }))
);
            

data.forEach((item: Feedback & { channel?: string }) => {
    const channel = item.channel || "Unknown";

    channelCounts[channel] = (channelCounts[channel] || 0) + 1;
});

setChannelData(
    Object.entries(channelCounts).map(([name, value]) => ({
        name,
        value,
    }))
);

            setSentimentData([
                { name: "Positive", value: positive },
                { name: "Neutral", value: neutral },
                { name: "Negative", value: negative },
            ]);
        }

        getFeedback();
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">

            <h1 className="text-3xl font-bold">
                Analytics Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
                Feedback analytics and insights.
            </p>

            <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <h2 className="text-xl font-semibold mb-4">
                    Sentiment Distribution
                </h2>

                <PieChart width={500} height={350}>
                    <Pie
                        data={sentimentData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {sentimentData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>

            </div>
            <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">

    <h2 className="text-xl font-semibold mb-4">
        Feedback by Channel
    </h2>

    <BarChart
        width={500}
        height={350}
        data={channelData}
    >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis allowDecimals={false} />

        <Tooltip />

        <Legend />

        <Bar
            dataKey="value"
            name="Feedback Count"
        />
    </BarChart>

</div>
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">

    <h2 className="text-xl font-semibold mb-4">
        Feedback Status Distribution
    </h2>

    <BarChart
        width={500}
        height={350}
        data={statusData}
    >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis allowDecimals={false} />

        <Tooltip />

        <Legend />

        <Bar
            dataKey="value"
            name="Feedback Count"
        />
    </BarChart>

</div>
        </div>
    );
}