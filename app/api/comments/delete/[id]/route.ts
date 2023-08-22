import Comment from "@models/comments";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { CommentProps } from "@types";

export const DELETE = async (
  request: Request,
  { params }: CommentProps
) => {
  try {
    await connectToDb();
    await Comment.findByIdAndDelete(params.id);

    return NextResponse.json("comment deleted", { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json("error deleting comment", { status: 500 });
  }
};