import Comment from "@models/comments";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    await connectToDb()
    try {
        const {content, author, date, threadId } = await request.json()
        const comment = await Comment.create({ content, author, date, threadId})
        return NextResponse.json(
            comment,
            { status: 201 }
        )
    } 
    catch (error) {
        console.log(error)
        return NextResponse.json(
            "Something went wrong",
            { status: 500 }
        )
    }
}