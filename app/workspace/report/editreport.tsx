"use client";

import { useState } from "react";

export default function EditReport({
    id,
    oldTitle,
    oldPeriodstart,
    oldPeriodend,
    oldContentJson,
}: {
    id: number;
    oldTitle: string;
    oldPeriodstart: string;
    oldPeriodend: string;
    oldContentJson: string;
}) {
    const [title, setTitle] = useState(oldTitle);
    const [periodstart, setPeriodstart] = useState(oldPeriodstart);
    const [periodend, setPeriodend] = useState(oldPeriodend);
    const [contentJson, setContentJson] = useState(oldContentJson);
    const [editing, setEditing] = useState(false);

    async function handleUpdate() {
        const response = await fetch("/api/report", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                title,
                periodstart,
                periodend,
                contentJson,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Report updated successfully!");
            window.location.reload();
        } else {
            alert(data.error || "Failed to update report");
        }
    }
    async function handleDelete() {
    const response = await fetch("/api/report", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
        }),
    });

    const data = await response.json();

    if (response.ok) {
        alert("Report deleted successfully!");
        window.location.reload();
    } else {
        alert(data.error || "Failed to delete report");
    }
}

    return (
        <div>
            {!editing ? (
                <button
                    type="button"
                    onClick={() => setEditing(true)}
                >
                    Edit
                </button>
            ) : (
                <div>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="datetime-local"
                        value={periodstart}
                        onChange={(e) => setPeriodstart(e.target.value)}
                    />

                    <input
                        type="datetime-local"
                        value={periodend}
                        onChange={(e) => setPeriodend(e.target.value)}
                    />

                    <textarea
                        value={contentJson}
                        onChange={(e) =>
                            setContentJson(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    <button
                       type="button"
                       onClick={handleDelete}
                        >
                      Delete
                    </button>
                    
                </div>
            )}
        </div>
    );
}