'use client';
import React from "react";
import { ThreadDetailProps } from "@types";
import ThreadDetail from "@app/components/ThreadDetail";
import { littleTitle } from "@app/fonts";
import styles from "./page.module.css"



const page = async ({ params }: ThreadDetailProps) => {
  const { id } = params;
  const thread = await fetch(`/api/thread/${id}`);
  const data = await thread.json();
  const { content, author, date } = data;

  return (
    <>
    <h2 style={littleTitle.style} className={styles.threadTitle}>THREAD</h2>
      <ThreadDetail
        content={content}
        author={author}
        date={date}
        _id={id}
      />
    </>
  );

};

export default page;
