import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "@firebase/auth";
  import { NextResponse } from "next/server";
  import { auth } from "./firebase-config";
  
  export async function POST(request: Request) {
    const { email, password, task } = await request.json();
    if (task === "register") {
      try {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log({ credentials });
        return NextResponse.json({
          status: 200,
          message: `account for ${email} created`,
        });
      } catch (err: any) {
        if (err.code.includes("email-already-in-use")) {
          return NextResponse.json({
            status: 500,
            message: "Sorry, this email is already in use",
          });
        } 
        if (err.code.includes("auth/weak-password")) {
          return NextResponse.json({
            status: 500,
            message: "Sorry, the password should be at least 6 character",
          });
        }
      }
    }
    if (task === "login") {
      try {
        const credentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log({ credentials });
        return NextResponse.json({
          status: 200,
          message: `Welcome back ${email}`,
          email,
          uid: credentials.user.uid,
          jwt: credentials.user.getIdToken(),
        });
      } catch (err: any) {
        if (err.code.includes("auth/wrong-password")) {
          return NextResponse.json({
            status: 500,
            message: "Login failed. Email or password incorrect",
          });
        }
        if (err.code.includes("auth/user not found")) {
          return NextResponse.json({
            status: 500,
            message: `No user found with this email ${email}`,
          });
        }
        return NextResponse.json({
          status: 500,
          message: "Login error",
        });
      }
    }
    return NextResponse.json({ status: 200, message: "unknown task" });
  }