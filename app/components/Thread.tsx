'use client'
import React, { useState, useContext, useEffect} from "react";
import { ThreadProps } from "@types";
import Link from "next/link";
import styles from "./Thread.module.css";
import { AuthContext } from "@app/context/AuthContext";
import { littleTitle } from "@app/fonts";

const Thread = ({ threads }: ThreadProps) => {
  const { content, author, _id } = threads;
  const { user } = useContext(AuthContext);
  const [isAuthor , setIsAuthor] = useState(false);

  const checkAuthor = () => {
    if (user.displayName === author) {
      setIsAuthor(true);
    }
  };

  useEffect(() => {
    checkAuthor();
  }
  , []);


  return (
    <div className={styles.thread}>
      <p className={styles.content}>{content}</p>
      {isAuthor && (
        <p style={littleTitle.style} className={styles.author}>Me</p>)
        }
        {!isAuthor && (
          <p style={littleTitle.style} className={styles.author}>{author}</p>)}
      <p>{new Date(threads.date).toLocaleString("FR-fr")}</p>
      {isAuthor && (
        <Link href={`/thread/${_id}`}>Details</Link>)}
    </div>
  );
};

export default Thread;
