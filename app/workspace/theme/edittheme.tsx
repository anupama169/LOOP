"use client";

import { useState } from "react";

export default function EditTheme({
    id,
    oldName,
    oldDescription,
    oldColor,
}: {
    id: number;
    oldName: string;
    oldDescription: string;
    oldColor: string;
}) {
    const [name, setName] = useState(oldName);
    const [description, setDescription] = useState(oldDescription);
    const [color, setColor] = useState(oldColor);
    const [editing, setEditing] = useState(false);

    async function handleUpdate() {
        const response = await fetch("/api/theme", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name,
                description,
                color,
            }),
        });
        

        const data = await response.json();

        if (response.ok) {
            alert("Theme updated successfully!");
            window.location.reload();
        } else {
            alert(data.error || "Failed to update theme");
        }
        
    }
    async function handleDelete() {
    const response = await fetch("/api/theme", {
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
        alert("Theme deleted successfully!");
        window.location.reload();
    } else {
        alert(data.error || "Failed to delete theme");
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />

                    <input
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
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