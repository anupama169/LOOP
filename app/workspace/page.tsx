
"use client";

import { useEffect, useState } from "react";

type Workspace = {
    id: number;
    name: string;
    createdAt: string;
};

export default function Workspaces() {
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [workspaceName, setWorkspaceName] = useState("");

    useEffect(() => {
        async function fetchWorkspaces() {
            try {
                const response = await fetch("/api/workspace");
const data = await response.json();

if (!response.ok) {
    console.error(data.error);
    setWorkspaces([]);
    return;
}

setWorkspaces(data);
            } catch (error) {
                console.error("Failed to fetch workspaces:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchWorkspaces();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-8">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-3xl font-bold tracking-wide">
                            LOOP1
                        </h1>

                        <p className="text-blue-200 mt-1">
                            Workspaces
                        </p>
                    </div>

                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 hover:bg-blue-500
                        px-5 py-3 rounded-lg
                        font-semibold shadow-lg
                        transition duration-200"
                    >
                        + Create Workspace
                    </button>

                </div>

                {/* Welcome */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">
                        Welcome back!
                    </h2>

                    <p className="text-gray-300 mt-2">
                        Manage your workspaces from one place.
                    </p>
                </div>

                {/* Workspace Section */}
                <div className="mt-8">

                    {loading ? (

                        <div className="bg-white/10 border border-white/10
                            rounded-2xl p-10 text-center">

                            <p className="text-gray-300">
                                Loading workspaces...
                            </p>

                        </div>

                    ) : workspaces.length === 0 ? (

                        <div className="bg-white/10 backdrop-blur-xl
                            border border-white/20
                            rounded-2xl p-12 text-center">

                            <div className="text-5xl mb-5">
                                📁
                            </div>

                            <h3 className="text-xl font-semibold">
                                No workspaces found
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Create your first workspace to get started.
                            </p>

                            <button
                                onClick={() => setShowForm(true)}
                                className="mt-6 bg-blue-600
                                hover:bg-blue-500
                                px-6 py-3 rounded-lg
                                font-semibold transition"
                            >
                                Create Workspace
                            </button>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {workspaces.map((workspace) => (

                                <div
                                     key={workspace.id}
                                     onClick={() => {
                                    window.location.href = `/workspace/${workspace.id}`;
        }}
        className="bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl p-6
        hover:bg-white/15
        transition duration-200
        cursor-pointer"
    >

                                    <div className="text-3xl mb-4">
                                        📁
                                    </div>

                                    <h2 className="text-xl font-semibold">
                                        {workspace.name}
                                    </h2>

                                    <p className="text-gray-400 text-sm mt-3">
                                        Workspace ID: {workspace.id}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Created:{" "}
                                        {new Date(
                                            workspace.createdAt
                                        ).toLocaleDateString()}
                                    </p>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

            {/* Create Workspace Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60
                    flex items-center justify-center px-4">

                    <div className="w-full max-w-md
                        bg-slate-900 border border-white/20
                        rounded-2xl shadow-2xl p-8">

                        <h2 className="text-2xl font-semibold mb-6">
                            Create Workspace
                        </h2>

                        <label className="block text-sm font-medium
                            text-blue-100 mb-2">
                            Workspace Name
                        </label>

                        <input
                            type="text"
                            value={workspaceName}
                            onChange={(e) =>
                                setWorkspaceName(e.target.value)
                            }
                            placeholder="Enter workspace name"
                            className="w-full rounded-lg bg-white/10
                            border border-white/20 px-4 py-3
                            text-white placeholder-gray-400
                            outline-none focus:border-blue-400
                            focus:ring-2 focus:ring-blue-400/30"
                        />

                        <div className="flex gap-3 mt-6">

                            <button
                                onClick={() => {
                                    setShowForm(false);
                                    setWorkspaceName("");
                                }}
                                className="flex-1 rounded-lg
                                border border-white/20
                                text-gray-300 py-3
                                hover:bg-white/10 transition"
                            >
                                Cancel
                            </button>

                            <button
                 onClick={async () => {
                if (!workspaceName.trim()) {
                       alert("Please enter workspace name");
                     return;
                    }

                try {
                         const response = await fetch("/api/workspace", {
                         method: "POST",
                         headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        name: workspaceName,
                        }),
                    });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error);
                return;
            }

            alert("Workspace created successfully!");

            setWorkspaces((previous) => [data, ...previous]);

            setWorkspaceName("");
            setShowForm(false);

        } catch (error) {
            console.error(error);
            alert("Failed to create workspace");
        }
    }}
    className="flex-1 rounded-lg
    bg-blue-600 hover:bg-blue-500
    text-white font-semibold py-3
    transition"
>
    Create
</button>
                               
                        </div>

                    </div>

                </div>
            )}

        </main>
    );
}

