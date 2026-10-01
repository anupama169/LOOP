import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
const userId = cookieStore.get("userId")?.value;
if (!userId) {
    return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
    );
}
const workspaceUser = await prisma.workspaceuser.findFirst({
    where: {
        userid: Number(userId),
    },
});

if (!workspaceUser) {
    return NextResponse.json(
        { error: "Workspace not found" },
        { status: 404 }
    );
}
const workspaceFeedback = await prisma.workspacefeedback.findUnique({
    where: {
        workspaceid_feedbackid: {
            workspaceid: workspaceUser.workspaceid,
            feedbackid: Number(id),
        },
    },
});
if (!workspaceFeedback) {
    return NextResponse.json(
        { error: "Feedback not found in your workspace" },
        { status: 404 }
    );
}
     await prisma.$transaction(async (tx) => {
    await tx.workspacefeedback.deleteMany({
        where: {
            workspaceid: workspaceUser.workspaceid,
            feedbackid: Number(id),
        },
    });

    await tx.embedding.deleteMany({
        where: {
            feedbackid: Number(id),
        },
    });

    await tx.feedbacktheme.deleteMany({
        where: {
            feedbackid: Number(id),
        },
    });

    await tx.feedback.delete({
        where: {
            id: Number(id),
        },
    });
});

        return NextResponse.json({
            message: "Feedback deleted successfully",
        });
    } catch (error) {
    console.error("DELETE FEEDBACK ERROR:", error);

    return NextResponse.json(
        { error: "Failed to delete feedback" },
        { status: 500 }
    );
}
}