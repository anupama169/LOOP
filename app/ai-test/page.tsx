"use client";

import { useState } from "react";

export default function AITestPage() {
    const [result, setResult] = useState("");

    async function testGemini() {
        const response = await fetch("/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: "The dashboard is very easy to use and looks great.",
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setResult(data.result);
        } else {
            setResult(data.error || "Gemini test failed");
        }
    }

    return (
        <div>
            <h1>Gemini AI Test</h1>

            <button type="button" onClick={testGemini}>
                Test Gemini
            </button>

            <p>{result}</p>
        </div>
    );
}