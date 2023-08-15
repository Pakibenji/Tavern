import Thread from "@models/threads";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { ThreadDetailProps } from "@types";

export const GET = async (
  request: Request,
  { params }: ThreadDetailProps
) => {
  try {
    await connectToDb();
    const thread = await Thread.findById(params.id);
    return NextResponse.json(thread, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json("error", { status: 500 });
  }
};