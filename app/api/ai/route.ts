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
Analyze this customer feedback.

Feedback:
"${body.content}"

Return the result in exactly this format:

Sentiment: positive, neutral, or negative
Theme: a short name for the main topic

Do not add anything else.
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