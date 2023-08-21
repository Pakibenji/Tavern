import React from "react";
import { ThreadDetailProps } from "@types";
import ThreadDetail from "@app/components/ThreadDetail";


const page = async ({ params }: ThreadDetailProps) => {
  const { id } = params;
  const thread = await fetch(`http://localhost:3000/api/thread/${id}`);
  const data = await thread.json();
  const { content, author, createdAt } = data;

  return (
    <div>
      <ThreadDetail
        content={content}
        author={author}
        date={createdAt}
        _id={id}
      />
    </div>
  );

};

export default page;
