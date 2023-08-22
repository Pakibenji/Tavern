"use client";
import React, { useContext, useState } from "react";
import { CommentTypeProps } from "@types";
import { AuthContext } from "@app/context/AuthContext";
import styles from "./Comment.module.css"

const Comment = ({ comments }: CommentTypeProps) => {
  const { user } = useContext(AuthContext);
  const { _id, content, author, date } = comments;
  const [editedComment, setEditedComment] = useState(content);
  const [isEdit, setIsEditing] = useState(false);

  const handleDeleteComment = async (_id: string) => {
    try {
      const response = await fetch(`api/comments/delete/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Comment deleted");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditComment = async (_id: string) => {
    try {
      const response = await fetch(`api/comments/edit/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          content: editedComment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Comment edited");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isEditComment = () => {
    setIsEditing(!isEdit);
  };

  return (
    <div key={_id} className={styles["comment-container"]}>
      <p>{content}</p>
      <p>{author}</p>
      <p>{new Date(date).toLocaleString("FR-fr")}</p>
      {user && user.displayName === author && !isEdit && (
        <button onClick={() => isEditComment()}>Edit</button>
      )}
      {isEdit && (
        <form onSubmit={() => handleEditComment(_id)}>
          <textarea
            placeholder="SPEAK"
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <input type="submit" />
        </form>
      )}
      {user && user.displayName === author && (
        <button onClick={() => handleDeleteComment(_id)}>Delete</button>
      )}
    </div>
  );
};

export default Comment;
