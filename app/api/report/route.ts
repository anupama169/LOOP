import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const report = await prisma.report.create({
            data: {
                title: body.title,
                periodstart: new Date(body.periodstart),
                periodend: new Date(body.periodend),
                contentJson: body.contentJson,
                userid: Number(body.userid),
            },
        });

        return NextResponse.json({
            message: "Report created successfully",
            report,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to create report" },
            { status: 500 }
        );
    }
}
export async function GET() {
    try {
        const reports = await prisma.report.findMany({
            orderBy: {
                id: "asc",
            },
        });

        return NextResponse.json(reports);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch reports" },
            { status: 500 }
        );
    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();

        const report = await prisma.report.update({
            where: {
                id: Number(body.id),
            },
            data: {
                title: body.title,
                periodstart: new Date(body.periodstart),
                periodend: new Date(body.periodend),
                contentJson: body.contentJson,
            },
        });

        return NextResponse.json({
            message: "Report updated successfully",
            report,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to update report" },
            { status: 500 }
        );
    }
}
export async function DELETE(request: Request) {
    try {
        const body = await request.json();

        const report = await prisma.report.delete({
            where: {
                id: Number(body.id),
            },
        });

        return NextResponse.json({
            message: "Report deleted successfully",
            report,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to delete report" },
            { status: 500 }
        );
    }
}