"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export default function DashboardCharts({
  positive,
  neutral,
  negative,
  newCount,
  reviewedCount,
  actionedCount,
}: {
  positive: number;
  neutral: number;
  negative: number;
  newCount: number;
  reviewedCount: number;
  actionedCount: number;
}) {
  const sentimentData = [
    { name: "Positive", value: positive },
    { name: "Neutral", value: neutral },
    { name: "Negative", value: negative },
  ];

  const statusData = [
    { status: "New", count: newCount },
    { status: "Reviewed", count: reviewedCount },
    { status: "Actioned", count: actionedCount },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-xl font-bold mb-4">
          Sentiment Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={sentimentData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              <Cell fill="#22c55e" />
              <Cell fill="#9ca3af" />
              <Cell fill="#ef4444" />
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-xl font-bold mb-4">
          Feedback Status
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}