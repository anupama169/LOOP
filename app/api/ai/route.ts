import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
);
export async function GET() {
    return NextResponse.json({
        message: "Gemini API route is working",
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const model = genAI.getGenerativeModel({
            model: "gemini-3.8-flash",
        });

        const prompt = `
Analyze this customer feedback.

Feedback:
"${body.content}"

Return the result in exactly this format:

Sentiment: positive, neutral, or negative
Theme: a short name for the main topic

Do not add anything else.
`;

        const result = await model.generateContent(prompt);

        const response = result.response;
        const text = response.text();

        return NextResponse.json({
            result: text,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Gemini request failed" },
            { status: 500 }
        );
    }
}