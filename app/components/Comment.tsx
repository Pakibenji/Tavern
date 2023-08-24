"use client";
import React, { useContext, useState} from "react";
import { CommentTypeProps } from "@types";
import { AuthContext } from "@app/context/AuthContext";
import styles from "./Comment.module.css"
import { littleTitle, dateFont, bigTitle } from "@app/fonts";
import { BiSolidCommentEdit } from "react-icons/bi";
import { RiChatDeleteFill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const Comment = ({ comments, getsComments }: CommentTypeProps) => {
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
        getsComments();
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
        getsComments();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isEditComment = () => {
    setIsEditing(!isEdit);
  };

  return (
    <div key={_id} className={styles.comment}>
      <p className={styles.content}>{content}</p>
      <p style={littleTitle.style} className={styles.author}>{author}</p>
      <p style={dateFont.style}>{new Date(date).toLocaleString("FR-fr")}</p>
      {user && user.displayName === author && !isEdit && (
        < BiSolidCommentEdit onClick={() => isEditComment()} />
      )}
      {isEdit && (
        <form onSubmit={() => handleEditComment(_id)}>
          <textarea
            placeholder="SPEAK"
            onChange={(e) => setEditedComment(e.target.value)}
          />
          < IoIosClose onClick={() => isEditComment()} />
          <button type="submit" style={bigTitle.style}>
          REPLY
        </button>
        </form>
      )}
      {user && user.displayName === author && (
        < RiChatDeleteFill onClick={() => handleDeleteComment(_id)} />
      )}
    </div>
  );
};

export default Comment;
