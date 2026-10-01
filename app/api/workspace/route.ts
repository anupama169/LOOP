import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

   export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { error: "User not logged in" },
        { status: 401 }
      );
    }

    const workspaces = await prisma.workspace.findMany({
      where: {
        user: {
          some: {
            userid: Number(userId),
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(workspaces);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch workspaces" },
      { status: 500 }
    );
  }
}
  export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { error: "User not logged in" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const workspace = await prisma.workspace.create({
      data: {
        name: body.name,
        user: {
          create: {
            userid: Number(userId),
          },
        },
      },
    });

    return NextResponse.json(workspace);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create workspace" },
      { status: 500 }
    );
  }
}