import React from 'react';
import { CommentTypeProps } from '@types';

const Comment = ({comments}: CommentTypeProps) => {
    const { _id, content, author, date } = comments;
    return (
        <div key={_id}>
        <p>{content}</p>
        <p>{author}</p>
        <p>{new Date(date).toLocaleString("FR-fr")}</p>
      </div>
    );
};

export default Comment;