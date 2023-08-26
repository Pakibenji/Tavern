'use client';
import React from "react";
import { ThreadDetailProps } from "@types";
import ThreadDetail from "@app/components/ThreadDetail";
import { littleTitle } from "@app/fonts";



const page = async ({ params }: ThreadDetailProps) => {
  const { id } = params;
  const thread = await fetch(`/api/thread/${id}`);
  const data = await thread.json();
  const { content, author, createdAt } = data;

  return (
    <>
    <h2 style={littleTitle.style}>THREAD</h2>
      <ThreadDetail
        content={content}
        author={author}
        date={createdAt}
        _id={id}
      />
    </>
  );

};

export default page;
