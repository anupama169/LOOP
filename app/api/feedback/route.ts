import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
export async function POST(request: Request) {
    try {
        const body = await request.json();

        const cookieStore = await cookies();
        const userId = cookieStore.get("userId")?.value;

        if (!userId) {
            return NextResponse.json(
                { error: "Please login first" },
                { status: 401 }
            );
        }

        const { content, channel, sentiment, status, workspaceid } = body;

        if (!content || !content.trim()) {
            return NextResponse.json(
                { error: "Feedback content is required" },
                { status: 400 }
            );
        }

        if (!channel || !channel.trim()) {
            return NextResponse.json(
                { error: "Channel is required" },
                { status: 400 }
            );
        }

        if (!workspaceid || isNaN(Number(workspaceid))) {
            return NextResponse.json(
                { error: "Valid workspace ID is required" },
                { status: 400 }
            );
        }

        const workspace = await prisma.workspace.findUnique({
            where: {
                id: Number(workspaceid),
            },
        });

        if (!workspace) {
            return NextResponse.json(
                { error: "Workspace not found" },
                { status: 404 }
            );
        }

       const prompt = `
Analyze this customer feedback.

Feedback:
"${content}"

Return the result in exactly this format:

Sentiment: positive, neutral, or negative
Theme: a short name for the main topic

Do not add anything else.
`;

let aiSentiment = sentiment;
let aiTheme = "";

try {
    console.log("Before AI");

    const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
    });
    console.log("Gemini response:", response);

    const aiText = response.text ?? "";
    console.log("AI Response:");
console.log(aiText);

console.log("Parsed Sentiment:");
console.log(
    aiText.match(/Sentiment:\s*(positive|neutral|negative)/i)?.[1]
);
    console.log("Gemini response:", response);

    

    aiSentiment =
        aiText.match(/Sentiment:\s*(positive|neutral|negative)/i)?.[1]?.toLowerCase() ||
        sentiment;

    aiTheme =
        aiText.match(/Theme:\s*(.+)/i)?.[1]?.trim() || "";
} catch (error) {
    console.error("Gemini AI failed:", error);

    // Continue saving the feedback even if AI fails
    aiSentiment = sentiment;
    aiTheme = "";
}
        console.log({
            content,
            channel,
            sentiment: aiSentiment || sentiment,
            status,
        });

        const feedback = await prisma.feedback.create({
            data: {
                content,
                channel,
                sentiment: aiSentiment || sentiment,
                status,
            },
        });

        console.log("Feedback created:", feedback.id);

       /* try {
            const embeddingResponse = await embeddingAI.models.embedContent({
                model: "gemini-embedding-001",
                contents: content,
            });

            const vector = embeddingResponse.embeddings?.[0]?.values;

            if (vector) {
                await prisma.embedding.create({
                    data: {
                        vector: JSON.stringify(vector),
                        feedbackid: feedback.id,
                    },
                });
            }
        } catch (error) {
            console.error("Embedding generation failed:", error);
        }*/

        await prisma.workspacefeedback.create({
            data: {
                workspaceid: Number(workspaceid),
                feedbackid: feedback.id,
            },
        });

        if (aiTheme) {
            let theme = await prisma.theme.findFirst({
                where: {
                    name: {
                        equals: aiTheme,
                        mode: "insensitive",
                    },
                    workspace: {
                        some: {
                            workspaceid: Number(workspaceid),
                        },
                    },
                },
            });

            if (!theme) {
                theme = await prisma.theme.create({
                    data: {
                        name: aiTheme,
                        description: "AI-generated theme",
                        color: "blue",
                        workspace: {
                            create: {
                                workspaceid: Number(workspaceid),
                            },
                        },
                    },
                });
            }

            await prisma.feedbacktheme.create({
                data: {
                    feedbackid: feedback.id,
                    themeid: theme.id,
                },
            });
        }

        return NextResponse.json({
            message: "Feedback created successfully",
            feedback,
        });

    } catch (error) {
        console.error("POST /feedback error:", error);

        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
export async function GET() {
    try {
        const cookieStore = await cookies();
        const userId = cookieStore.get("userId")?.value;

        if (!userId) {
            return NextResponse.json(
                { error: "Please login first" },
                { status: 401 }
            );
        }

        const feedback = await prisma.feedback.findMany();

        return NextResponse.json(feedback);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch feedback" },
            { status: 500 }
        );
    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();

        const { id, content, channel, sentiment, status } = body;

        const feedback = await prisma.feedback.update({
            where: {
                id: Number(id),
            },
            data: {
                content,
                channel,
                sentiment,
                status,
            },
        });

        return NextResponse.json({
            message: "Feedback updated successfully",
            feedback,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to update feedback" },
            { status: 500 }
        );
    }
}
export async function DELETE(request: Request) {
    try {
        const body = await request.json();

        const { id } = body;

        await prisma.workspacefeedback.deleteMany({
            where: {
                feedbackid: Number(id),
            },
        });

        const feedback = await prisma.feedback.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json({
            message: "Feedback deleted successfully",
            feedback,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to delete feedback" },
            { status: 500 }
        );
    }
}