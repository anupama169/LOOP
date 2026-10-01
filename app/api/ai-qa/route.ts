
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const question = body.question;
        const workspaceid = Number(body.workspaceid);

        if (!question) {
            return NextResponse.json(
                { error: "Question is required" },
                { status: 400 }
            );
        }

        if (!workspaceid) {
            return NextResponse.json(
                { error: "Workspace ID is required" },
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
                answer: "No feedback available for this workspace.",
            });
        }

        const feedbackText = feedback
            .map((item) => item.content)
            .join("\n");

        const prompt = `
Answer the user's question using only the customer feedback below.

Customer feedback:
${feedbackText}

Question:
${question}

If the answer cannot be found in the feedback, say:
"Not enough information in the feedback."

Do not invent information.
`;

        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content:
                        "You answer questions only using the provided customer feedback.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const answer =
            completion.choices[0]?.message?.content ||
            "Unable to generate an answer.";

        return NextResponse.json({
            answer,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to answer question" },
            { status: 500 }
        );
    }
}

