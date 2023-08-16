import Thread from "@models/threads";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { ThreadDetailProps } from "@types";

export const PATCH = async (
  request: Request,
  { params }: ThreadDetailProps
) => {
    const { title, content } = await request.json();
  try {
    await connectToDb();
    await Thread.findByIdAndUpdate(params.id, { title: title,  content: content });

    return NextResponse.json("thread edited", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error editing thread", { status: 500 });
  }
};