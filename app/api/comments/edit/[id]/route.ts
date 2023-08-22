import Comments from "@models/comments";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { CommentProps } from "@types";

export const PATCH = async (
  request: Request,
  { params }: CommentProps
) => {
    const { content } = await request.json();
  try {
    await connectToDb();
    await Comments.findByIdAndUpdate(params.id, { content: content });

    return NextResponse.json("comment edited", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error editing comment", { status: 500 });
  }
};