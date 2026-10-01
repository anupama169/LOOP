"use client";

import { useState } from "react";

export default function FeedbackForm({
    workspaceid,
}: {
    workspaceid: number;
}) {
    const [content, setContent] = useState("");
    const [channel, setChannel] = useState("");
    const [sentiment, setSentiment] = useState("positive");
    const [status, setStatus] = useState("new");
    const [feedbackId, setFeedbackId] = useState("");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>)  {
        e.preventDefault();

        const response = await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                channel,
                sentiment,
                status,
                workspaceid,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Feedback added successfully!");
            setContent("");
            setChannel("");
        } else {
            alert(data.error || "Failed to add feedback");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 bg-gray-800 p-6 rounded-lg"
           
        >
           

            <input
                type="text"
                placeholder="Enter feedback"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 mb-4"
                required
            />

            <input
                type="text"
                placeholder="Channel"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 mb-4"
                required
            />

            <select
                value={sentiment}
                onChange={(e) => setSentiment(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 mb-4"
            >
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
            </select>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 mb-4"
            >
                
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="actioned">Actioned</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold"
            >
                Add Feedback
            </button>
        </form>
    );
}