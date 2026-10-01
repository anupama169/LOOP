import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const embedding = await prisma.embedding.create({
            data: {
                vector: body.vector,
                feedbackid: Number(body.feedbackid),
            },
        });

        return NextResponse.json({
            message: "Embedding created successfully",
            embedding,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to create embedding" },
            { status: 500 }
        );
    }
}
export async function GET() {
    try {
        const embeddings = await prisma.embedding.findMany({
            orderBy: {
                id: "asc",
            },
        });

        return NextResponse.json(embeddings);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch embeddings" },
            { status: 500 }
        );
    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();

        const embedding = await prisma.embedding.update({
            where: {
                id: Number(body.id),
            },
            data: {
                vector: body.vector,
                feedbackid: Number(body.feedbackid),
            },
        });

        return NextResponse.json({
            message: "Embedding updated successfully",
            embedding,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to update embedding" },
            { status: 500 }
        );
    }
}
export async function DELETE(request: Request) {
    try {
        const body = await request.json();

        const embedding = await prisma.embedding.delete({
            where: {
                id: Number(body.id),
            },
        });

        return NextResponse.json({
            message: "Embedding deleted successfully",
            embedding,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to delete embedding" },
            { status: 500 }
        );
    }
}