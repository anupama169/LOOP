/*import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {
    try {
        const body = await request.json();

        const text = body.text;
        const feedbackid = Number(body.feedbackid);

        if (!text) {
            return NextResponse.json(
                { error: "Text is required" },
                { status: 400 }
            );
        }

        if (!feedbackid) {
            return NextResponse.json(
                { error: "Feedback ID is required" },
                { status: 400 }
            );
        }

        // Generate embedding
        

        const vector = response.embeddings?.[0]?.values;

        if (!vector) {
            return NextResponse.json(
                { error: "Embedding vector was not generated" },
                { status: 500 }
            );
        }

        // Save embedding in database
        const embedding = await prisma.embedding.create({
            data: {
                vector: JSON.stringify(vector),
                feedbackid: feedbackid,
            },
        });

        return NextResponse.json({
            message: "Embedding generated and saved successfully",
            embedding,
        });

    } catch (error) {
        console.error("Embedding error:", error);

        return NextResponse.json(
            { error: "Failed to generate and save embedding" },
            { status: 500 }
        );
    }
}*/
import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.json({
        message: "Embedding generation is temporarily disabled.",
    });
}