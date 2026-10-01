
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ThemeForm({ workspaceid }: { workspaceid: number }) 
 {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
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
            alert("Theme created successfully");
            router.refresh();
            setName("");
            setDescription("");
            setColor("");
        } else {
            alert(data.error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-xl mt-6 space-y-4"
        >
            <h3 className="text-xl font-semibold">
                Create Theme
            </h3>

            <input
                type="text"
                placeholder="Theme name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700"
                required
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700"
                required
            />

            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold"
            >
                Create Theme
            </button>
        </form>
    );
 }