import { Schema, model, models,  } from "mongoose";

import { CommentType } from "@types";

const commentSchema = new Schema<CommentType>({
    content: {
        type: String,
        required: [true, "Comment is Required"],
    },
    author: {
        type: String,
        required: [true, "Author is Required"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    threadId: {
        type: String,
        required: [true, "Thread ID is Required"],
    },
});

const Comment = models.Comment || model<CommentType>("Comment", commentSchema);

export default Comment;