import Thread from "@models/threads";
import { connectToDb } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        await connectToDb()

        const threads = await Thread.find({})
        return NextResponse.json(
            threads,
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            "Something went wrong",
            { status: 500 }
        )
    }
}