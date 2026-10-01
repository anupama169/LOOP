"use client";

import { useState, useEffect } from "react";

export default function EmbeddingPage() {
    
    const [vector, setVector] = useState("");
    const [feedbackid, setFeedbackid] = useState("");
    const [embeddings, setEmbeddings] = useState<any[]>([]);
    useEffect(() => {
    async function getEmbeddings() {
        const response = await fetch("/api/embedding");
        const data = await response.json();

        setEmbeddings(data);
    }

    getEmbeddings();
}, []);
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch("/api/embedding", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                vector,
                feedbackid,
            }),
        });

        const data = await response.json();
        if (response.ok) {
    alert("Embedding created successfully!");

    setEmbeddings((previous) => [...previous, data.embedding]);

    setVector("");
    setFeedbackid("");
}

        
         else {
            alert(data.error || "Failed to create embedding");
        }
    }

    return (
        <div>
            <h1>Embedding</h1>

            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Vector"
                    value={vector}
                    onChange={(e) => setVector(e.target.value)}
                />

                <input
                    placeholder="Feedback ID"
                    value={feedbackid}
                    onChange={(e) => setFeedbackid(e.target.value)}
                />

                <button type="submit">
                    Create Embedding
                </button>

            </form>
            {embeddings.map((embedding) => (
    <div key={embedding.id}>
        <p>ID: {embedding.id}</p>
        <p>Vector: {embedding.vector}</p>
        <p>Feedback ID: {embedding.feedbackid}</p>

        <hr />
    </div>
))}
        </div>
    );
}