import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function GET() {
    return NextResponse.json({
        message: "Groq API route is working",
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

       const prompt = `
You are an expert sentiment analysis system.

Analyze this customer feedback.

Feedback:
"${body.content}"

Classify the sentiment using these rules:

- Positive: expresses satisfaction, praise, enjoyment, recommendation, happiness or appreciation.
- Negative: expresses dissatisfaction, complaints, disappointment, anger or frustration.
- Neutral: only factual information without any positive or negative opinion.

Examples:

"I love this product." → positive
"It is a very interesting movie." → positive
"The service was excellent." → positive
"The delivery was late." → negative
"The app crashes frequently." → negative
"The meeting is tomorrow." → neutral

Return ONLY this format:

Sentiment: positive
Theme: one or two words
`;

        const response = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0,
        });

        const text = response.choices[0]?.message?.content ?? "";

        return NextResponse.json({
            result: text,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Groq request failed" },
            { status: 500 }
        );
    }
}