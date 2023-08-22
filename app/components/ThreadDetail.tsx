"use client";
import { ThreadType } from "@types";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const ThreadDetail = ({
  content,
  author,
  _id,
  date,
}: ThreadType) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const { user } = useContext(AuthContext);


  const handleDeleteThread = async (id: string) => {
    if ( user.displayName !== author ) {
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
    <div>
      <div className="thread-detail-container">
        {isEditing ? (
          <div>
            <textarea
            placeholder="content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={() => handleEditThread(_id)}>Save</button>
          </div>
        ) : (
          <div>
            <p>{content}</p>
            <p>{author}</p>
            { user && user.displayName === author && <button onClick={() => setIsEditing(true)}>Edit</button>
            }
          </div>
        )}
      </div>
      { user && user.displayName === author && <button onClick={() => handleDeleteThread(_id)}>Delete</button>
      }
    </div>
  );
};

export default ThreadDetail;
