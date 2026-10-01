
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const theme = await prisma.theme.create({
    data: {
        name: body.name,
        description: body.description,
        color: body.color,

        workspace: {
            create: {
                workspaceid: Number(body.workspaceid),
            },
        },
    },
});

        return NextResponse.json({
            message: "Theme created successfully",
            theme,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to create theme" },
            { status: 500 }
        );
    }
}
export async function GET() {
    try {
        const themes = await prisma.theme.findMany({
            orderBy: {
                id: "asc",
            },
        });

        return NextResponse.json(themes);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch themes" },
            { status: 500 }
        );
    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();

        const theme = await prisma.theme.update({
            where: {
                id: Number(body.id),
            },
            data: {
                name: body.name,
                description: body.description,
                color: body.color,
            },
        });

        return NextResponse.json({
            message: "Theme updated successfully",
            theme,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to update theme" },
            { status: 500 }
        );
    }
}
export async function DELETE(request: Request) {
    try {
        const body = await request.json();

        const { id } = body;

        const theme = await prisma.theme.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json({
            message: "Theme deleted successfully",
            theme,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete theme" },
            { status: 500 }
        );
    }
}