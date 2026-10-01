import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, passwordHash } = body;

    const password1 = await bcrypt.hash(passwordHash, 10);

    const result = await prisma.$transaction(async (tx) => {

      const user = await tx.user.create({
        data: {
          name: name,
          email: email,
          passwordHash: password1,
          role: "admin",
        },
      });

      const workspace = await tx.workspace.create({
        data: {
          name: name,
        },
      });

      await tx.workspaceuser.create({
        data: {
          workspaceid: workspace.id,
          userid: user.id,
        },
      });

      return { user, workspace };
    });

    return NextResponse.json(
      {
        message: "Signup successfully",
        userId: result.user.id,
        workspaceId: result.workspace.id,
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: String(error) },
      { status: 500 }
    );
  }
}