
"use client";

import { useState } from "react";

export default function AIQA({
    workspaceid,
}: {
    workspaceid: number;
}) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleQuestion() {
        if (!question.trim()) {
            setAnswer("Please enter a question.");
            return;
        }

        setLoading(true);
        setAnswer("");

        try {
            const response = await fetch("/api/ai-qa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    workspaceid,
                    question,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setAnswer(data.answer);
            } else {
                setAnswer(data.error || "Failed to answer question");
            }
        } catch (error) {
            console.error(error);
            setAnswer("Something went wrong.");
        }

        setLoading(false);
    }

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">
                AI Feedback Q&A
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask something about customer feedback..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-blue-500"
                />

                <button
                    type="button"
                    onClick={handleQuestion}
                    disabled={loading}
                    className="mt-4 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                    {loading ? "Thinking..." : "Ask Question"}
                </button>

                {answer && (
                    <div className="mt-5 bg-gray-800 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">
                            Answer
                        </h3>

                        <p className="text-gray-300">
                            {answer}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

