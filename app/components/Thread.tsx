import React from "react";
import { ThreadProps } from "@types";
import Link from "next/link";

const Thread = ({ threads }: ThreadProps) => {
  const { title, content, author, _id } = threads;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
      <Link href={`/thread/${_id}`}>Details</Link>
    </div>
  );
};

export default Thread;
