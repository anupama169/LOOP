import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const users = await prisma.user.count();
        const workspaces = await prisma.workspace.count();
        const feedback = await prisma.feedback.count();
        const themes = await prisma.theme.count();
        const reports = await prisma.report.count();

        return NextResponse.json({
            users,
            workspaces,
            feedback,
            themes,
            reports
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to fetch dashboard data" },
            { status: 500 }
        );
    }
}