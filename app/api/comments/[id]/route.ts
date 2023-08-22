import Comment from "@models/comments";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { CommentProps } from "@types";

export const GET = async (
    request: Request,
    { params }: CommentProps
) => {
    try {
        await connectToDb();
        const comments = await Comment.find({ threadId: params.id });
        return NextResponse.json(comments, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json("error", { status: 500 });
    }
}