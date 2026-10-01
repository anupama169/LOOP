"use client";

import { useState } from "react";

export default function AISummary({
       workspaceid,
}: {
    workspaceid: number;
}) {
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSummary() {
        setLoading(true);

        const response = await fetch(`/api/ai-summary?workspaceid=${workspaceid}`)
        const data = await response.json();

        if (response.ok) {
            setSummary(data.summary);
        } else {
            setSummary(data.error || "Failed to generate summary");
        }

        setLoading(false);
    }

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">
                AI Feedback Summary
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <button
                    type="button"
                    onClick={handleSummary}
                    className=" border p-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold"
                >
                    {loading ? "Generating..." : "Generate Summary"}
                </button>

                {summary && (
                    <p className="mt-5 text-gray-300">
                        {summary}
                    </p>
                )}
            </div>
        </div>
    );
}