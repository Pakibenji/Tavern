"use client";
import { ThreadType } from "@types";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ThreadDetail = ({
  title,
  content,
  author,
  _id,
  date,
}: ThreadType) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const handleDeleteThread = async (id: string) => {
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
    try {
      const res = await fetch(`/api/thread/edit/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: editedTitle,
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
            <input
              type="text"
              placeholder="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
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
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{author}</p>
            <p>{date}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
      <button onClick={() => handleDeleteThread(_id)}>Delete</button>
    </div>
  );
};

export default ThreadDetail;
