'use client';
import React, { useEffect } from "react";
import { ThreadDetailProps } from "@types";
import { useRouter } from "next/router";


const page = async ({ params }: ThreadDetailProps) => {
  const { id } = params;
  const thread = await fetch(`http://localhost:3000/api/thread/${id}`);
  const data = await thread.json();
  const { title, content, author, createdAt } = data;

const handleDeleteThread = async (id: string) => {
    try {
        const res = await fetch(`/api/thread/delete/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            console.log('Thread deleted');

        }
    } catch (error) {
        console.error(error);
    }
};

const handleEditThread = async (id: string) => {
    try {
        const res = await fetch(`/api/thread/edit/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'New title',
                content: 'New content',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            console.log('Thread edited');
            
        }
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div>
      <div className="thread-container">
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{author}</p>
        <p>{createdAt}</p>
      </div>
      <div className="btn-container">
        <button onClick={() => handleEditThread(id)}>Edit</button>
        <button onClick={() => handleDeleteThread(id)}>Delete</button>
      </div>
    </div>
  );
};

export default page;
