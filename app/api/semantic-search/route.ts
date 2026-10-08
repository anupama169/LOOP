/*import { NextResponse } from "next/server";
import  Groq from "groq-sdk";
import { prisma } from "@/lib/prisma";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

function cosineSimilarity(
    vectorA: number[],
    vectorB: number[]
): number {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    for (let i = 0; i < vectorA.length; i++) {
        dotProduct += vectorA[i] * vectorB[i];
        magnitudeA += vectorA[i] * vectorA[i];
        magnitudeB += vectorB[i] * vectorB[i];
    }

    const denominator =
        Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB);

    if (denominator === 0) {
        return 0;
    }

    return dotProduct / denominator;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const query = body.query;

        if (!query) {
            return NextResponse.json(
                { error: "Search query is required" },
                { status: 400 }
            );
        }

        // 1. Generate embedding for search query
        const response = await ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: query,
        });

        const queryVector = response.embeddings?.[0]?.values;

        if (!queryVector) {
            return NextResponse.json(
                { error: "Failed to generate search embedding" },
                { status: 500 }
            );
        }

        // 2. Get stored embeddings with their feedback
        const embeddings = await prisma.embedding.findMany({
            include: {
                feedback: true,
            },
        });

        // 3. Calculate similarity
       const results = embeddings
    .map((item) => {
        try {
            const storedVector = JSON.parse(item.vector) as number[];

            // Ignore vectors with a different size
            if (storedVector.length !== queryVector.length) {
                return null;
            }

            const similarity = cosineSimilarity(
                queryVector,
                storedVector
            );

            return {
                feedbackid: item.feedbackid,
                content: item.feedback.content,
                channel: item.feedback.channel,
                sentiment: item.feedback.sentiment,
                status: item.feedback.status,
                similarity,
            };
        } catch {
            // Ignore old vectors that are not valid JSON
            return null;
        }
    })
    .filter((item) => item !== null);

        // 4. Highest similarity first
        results.sort(
            (a, b) => b.similarity - a.similarity
        );

        // 5. Return top 5
        const topResults = results.slice(0, 5);

        return NextResponse.json({
            message: "Semantic search completed successfully",
            query,
            results: topResults,
        });

    } catch (error) {
        console.error("Semantic search error:", error);

        return NextResponse.json(
    {
        error: "Failed to perform semantic search",
        details: error instanceof Error ? error.message : String(error),
    },
    { status: 500 }
);
    }
}*/
import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.json({
        message: "Semantic search is temporarily disabled.",
    });
}