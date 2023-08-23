"use client";
import React, { useState, useContext, useEffect } from "react";
import { ThreadProps, CommentType } from "@types";
import Link from "next/link";
import styles from "./Thread.module.css";
import { AuthContext } from "@app/context/AuthContext";
import { littleTitle, dateFont } from "@app/fonts";
import Comment from "./Comment";
import NewComment from "./NewComment";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { BiSolidCommentAdd } from "react-icons/bi";

const Thread = ({ threads }: ThreadProps) => {
  const { content, author, _id } = threads;
  const { user } = useContext(AuthContext);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [commentsContent, setCommentsContent] = useState("");
  const [threadComments, setThreadComments] = useState([]);
  const [showComments, setShowComment] = useState(false);

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
    if (commentsContent === "") return alert("Please enter a message");
    if (commentsContent.length > 250) return alert("250 characters max");
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
      const sortedData = data.sort((a: CommentType, b: CommentType) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setThreadComments(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const showComment = () => {
    setShowComment(!showComments);
  };

  useEffect(() => {
    checkAuthor();
  }, []);

  useEffect(() => {
    getsComments();
  }, []);
  return (
    <div className={styles.thread}>
      <p className={styles.content}>{content}</p>
      {isAuthor && (
        <p style={littleTitle.style} className={styles.author}>
          Me
        </p>
      )}
      {!isAuthor && (
        <p style={littleTitle.style} className={styles.author}>
          {author}
        </p>
      )}
      <p style={dateFont.style}>{new Date(threads.date).toLocaleString("FR-fr")}</p>
      {showComments && (
        <div>
          {threadComments &&
            threadComments.length > 0 &&
            threadComments.map((comments: CommentType) => (
              <Comment key={comments._id} comments={comments} />
            ))}
        </div>
      )}
      <div className={styles["btn-container"]}>
        {isAuthor && (
          <Link href={`/thread/${_id}`} className={styles.btn}>
            {" "}
            Detail
          </Link>
        )}
        <BiSolidCommentAdd
          onClick={handleComment}
          className={isComment ? styles.none : ""}
        />
        <span onClick={() => showComment()} style={dateFont.style}>
          {threadComments && threadComments.length} <RiQuestionAnswerFill />
        </span>
      </div>
      {isComment && (
        <NewComment
          setCommentsContent={setCommentsContent}
          handleCreateComment={handleCreateComment}
          setIsComment={setIsComment}
        />
      )}
    </div>
  );
};

export default Thread;
