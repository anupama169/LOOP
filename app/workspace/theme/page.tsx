"use client";

import { useState, useEffect, SubmitEvent } from "react";
import EditTheme from "./edittheme";

export default function ThemePage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [workspaceid, setWorkspaceid] = useState("");
    const [themes, setThemes] = useState<any[]>([]);
    useEffect(() => {
    async function getThemes() {
        const response = await fetch("/api/theme");
        const data = await response.json();

        setThemes(data);
    }

    getThemes();
}, []);
    async function handleSubmit(e:SubmitEvent) {
        e.preventDefault();

        const response = await fetch("/api/theme", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                description,
                color,
                workspaceid,
            }),
        });

        const data = await response.json();

       if (response.ok) {
                alert("Theme created successfully!");

                setThemes((previous) => [...previous, data.theme]);

                setName("");
                setDescription("");
                setColor("");
                setWorkspaceid("");

        } else {
            alert(data.error || "Failed to create theme");
        }
    }

    return (
        <div>
            <h1>Theme</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Theme name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />

                <input
                    placeholder="Workspace ID"
                    value={workspaceid}
                    onChange={(e) => setWorkspaceid(e.target.value)}
                />

                <button type="submit">
                    Create Theme
                </button>
            </form>
          {themes.map((theme) => (
    <div key={theme.id}>
    <p>EDIT COMPONENT TEST</p>
        <p>Name: {theme.name}</p>
        <p>Description: {theme.description}</p>
        <p>Color: {theme.color}</p>

        <EditTheme
            id={theme.id}
            oldName={theme.name}
            oldDescription={theme.description}
            oldColor={theme.color}
        />

        <hr />
    </div>
))}
        </div>
    );
}