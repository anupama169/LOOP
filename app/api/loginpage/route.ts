import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "user not found",
      });
    }

    if (!(await bcrypt.compare(password, user.passwordHash))) {
      return NextResponse.json({
        message: "Invalid Password",
      });
    }

    const workspaceUser = await prisma.workspaceuser.findFirst({
      where: {
        userid: user.id,
      },
    });

    if (!workspaceUser) {
      return NextResponse.json({
        message: "Workspace not found",
      });
    }

    const response = NextResponse.json({
      message: "Login Successfully",
      userId: user.id,
      workspaceId: workspaceUser.workspaceid,
    });

    response.cookies.set("userId", user.id.toString(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return response;

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    );
  }
}