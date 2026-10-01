import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const workspaceid = Number(
            searchParams.get("workspaceid")
        );

        if (!workspaceid) {
            return NextResponse.json(
                { error: "Invalid workspace ID" },
                { status: 400 }
            );
        }

        const feedback = await prisma.feedback.findMany({
            where: {
                workspace: {
                    some: {
                        workspaceid: workspaceid,
                    },
                },
            },
            select: {
                content: true,
            },
        });

        if (feedback.length === 0) {
            return NextResponse.json({
                summary: "No feedback available to summarize.",
            });
        }

        const feedbackText = feedback
            .map((item) => item.content)
            .join("\n");

        const prompt = `
Summarize the following customer feedback in a short, clear paragraph.

Customer feedback:
${feedbackText}

Focus on:
- Main positive points
- Main negative points
- Common issues

Do not add information that is not present in the feedback.
`;

        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content:
                        "You summarize customer feedback using only the information provided.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const summary =
            completion.choices[0]?.message?.content ||
            "Unable to generate summary.";

        return NextResponse.json({
            summary,
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to generate summary" },
            { status: 500 }
        );
    }
}