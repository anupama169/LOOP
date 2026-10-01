"use client";

import { useState } from "react";

export default function AIQA() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function handleAsk() {
        const response = await fetch("/api/ai-qa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setAnswer(data.answer);
        } else {
            setAnswer(data.error || "Failed to get answer");
        }
    }

    return (
        <div>
            <h1>AI Q&A</h1>

            <input
                type="text"
                placeholder="Ask a question about the feedback"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />

            <button type="button" onClick={handleAsk}>
                Ask AI
            </button>

            {answer && (
                <div>
                    <h2>Answer</h2>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}