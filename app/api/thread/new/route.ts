import Thread from "@models/threads";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    await connectToDb()
    try {
        const {content, author, date } = await request.json()
        const thread = await Thread.create({ content, author, date})
        return NextResponse.json(
            thread,
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