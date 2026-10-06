
"use client";

import { useState } from "react";
export default function EditFeedback({
    id,
    oldContent,
    oldChannel,
    oldSentiment,
    oldStatus,
}: {
    id: number;
    oldContent: string;
    oldChannel: string;
    oldSentiment: string;
    oldStatus: string;
}) {
    const [content, setContent] = useState(oldContent);
    const [channel, setChannel] = useState(oldChannel);
    const [sentiment, setSentiment] = useState(oldSentiment);
    const [status, setStatus] = useState(oldStatus);
    const [editing, setEditing] = useState(false);

    async function handleUpdate() {
        const response = await fetch("/api/feedback", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                content,
                channel,
                status,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Feedback updated successfully!");
            window.location.reload();
        } else {
            alert(data.error || "Failed to update feedback");
        }
    }

   return (
    <div>
        {!editing ? (
            <button
                type="button"
                onClick={() => setEditing(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
            >
                Edit
            </button>
        ) : (
            <div>
                <input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <input
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                />

               <p>AI Sentiment: {sentiment}</p>

                <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
>
    <option value="new">New</option>
    <option value="reviewed">Reviewed</option>
    <option value="actioned">Actioned</option>
</select>

                <button
                    type="button"
                    onClick={handleUpdate}
                    className="mt-4 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
                >
                    Update
                </button>
            </div>
        )}
    </div>
)};


