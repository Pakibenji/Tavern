import React from "react";
import { bigTitle } from "@app/fonts";
import { NewCommentProps } from "@types";
import  styles from "./NewComment.module.css";
import { IoIosClose } from "react-icons/io";

const NewComment = ({setCommentsContent, handleCreateComment, setIsComment}: NewCommentProps) => {
  return (
    <>
      <form onSubmit={handleCreateComment} className={styles.newComment}>
        <textarea
          style={bigTitle.style}
          placeholder="SPEAK"
          onChange={(e) => setCommentsContent(e.target.value)}
        />
        <IoIosClose onClick={() => {setIsComment(false)}} />
        <button type="submit" style={bigTitle.style}>
          REPLY
        </button>
      </form>
    </>
  );
};

export default NewComment;
