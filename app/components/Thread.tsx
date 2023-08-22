'use client'
import React, { useState, useContext, useEffect} from "react";
import { ThreadProps,  CommentType } from "@types";
import Link from "next/link";
import styles from "./Thread.module.css";
import { AuthContext } from "@app/context/AuthContext";
import { littleTitle } from "@app/fonts";
import Comment from "./Comment";

const Thread = ({ threads }: ThreadProps) => {
  const { content, author, _id } = threads;
  const { user } = useContext(AuthContext);
  const [isAuthor , setIsAuthor] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [commentsContent, setCommentsContent] = useState('')
  const [threadComments, setThreadComments] = useState([])

  const checkAuthor = () => {
    if (user.displayName === author) {
      setIsAuthor(true);
    }
  };

  const handleComment = () => {
    setIsComment(!isComment);
  };

  const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments/new", {
        method: "POST",
        body: JSON.stringify({
          content: commentsContent,
          author: user.displayName,
          date: Date.now,
          threadId: _id,
        }),
      });
      if (res.ok) {
        setIsComment(false);
        getsComments();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getsComments = async () => {
    const id = _id;
    try {
      const res = await fetch(`http://localhost:3000/api/comments/${id}`);
      const data = await res.json();
      setThreadComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuthor();
  }
  , []);

  useEffect(() => {
    getsComments();
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
      <button onClick={handleComment}>Comment</button>
      {isComment && (
        <form onSubmit={handleCreateComment}>
          <textarea placeholder="SPEAK" onChange={(e) => (setCommentsContent(e.target.value))}  />
          <input type="submit" />
        </form>
      )}
      <div>
        {threadComments && threadComments.length > 0 && threadComments.map((comments: CommentType) => (
          <Comment key={comments._id} comments={comments} />
        ))}
        </div>
    </div>
  );
};

export default Thread;
