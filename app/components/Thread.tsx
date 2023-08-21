'use client'
import React, { useContext} from "react";
import { ThreadProps } from "@types";
import Link from "next/link";
import styles from "./Thread.module.css";
import { AuthContext } from "@app/context/AuthContext";

const Thread = ({ threads }: ThreadProps) => {
  const { content, author, _id } = threads;
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.thread}>
      <p>{content}</p>
      <p>{author}</p>
      {user.email === author && (
        <Link href={`/thread/${_id}`}>Details</Link>)}
    </div>
  );
};

export default Thread;
