import Thread from "@models/threads";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { ThreadDetailProps } from "@types";

export const DELETE = async (
  request: Request,
  { params }: ThreadDetailProps
) => {
  try {
    await connectToDb();
    await Thread.findByIdAndDelete(params.id);

    return NextResponse.json("thread deleted", { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json("error deleting thread", { status: 500 });
  }
};