import React from 'react';
import {ThreadDetailProps } from '@types';

const page = async  ({params}: ThreadDetailProps) => {
    const {id} = params;
    const thread = await fetch(`http://localhost:3000/api/thread/${id}`);
    const data = await thread.json();
    const {title, content, author, createdAt} = data;
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{author}</p>
            <p>{createdAt}</p>
        </div>
    );
};

export default page;