"use client";
import { ThreadType } from "@types";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import styles from "./ThreadDetail.module.css";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { dateFont, littleTitle } from "@app/fonts";

const ThreadDetail = ({ content, author, _id, date }: ThreadType) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const { user } = useContext(AuthContext);

  const handleDeleteThread = async (id: string) => {
    if (user.displayName !== author) {
      alert("You are not the author of this thread");
      return;
    }
    try {
      const res = await fetch(`/api/thread/delete/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log("Thread deleted");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditThread = async (id: string) => {
    if (user.displayName !== author) {
      alert("You are not the author of this thread");
      return;
    }
    try {
      const res = await fetch(`/api/thread/edit/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          content: editedContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Thread edited");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        {isEditing ? (
          <div className={styles.threadDetail}>
            <textarea
            style={littleTitle.style}
              placeholder="content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div>
            <IoIosClose onClick={() => setIsEditing(false)} />
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={() => handleEditThread(_id)}>Save</button>
            </div>
            </div>
        ) : (
          <div className={styles.threadDetail}>
            <p className={styles.content}>{content}</p>
            <p className={styles.author} style={littleTitle.style}>
              {author}
            </p>
            <p className={styles.date} style={dateFont.style}>
              {new Date(date).toLocaleString("FR-fr")}
            </p>
            <div className={styles.link}>
              {user && user.displayName === author && (
                <AiTwotoneEdit onClick={() => setIsEditing(true)} />
              )}
              {user && user.displayName === author && (
                <AiTwotoneDelete onClick={() => handleDeleteThread(_id)} />
              )}
            </div>
          </div>
        )}
    </>
  );
};

export default ThreadDetail;
