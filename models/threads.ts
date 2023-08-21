import { Schema, model, models } from 'mongoose';

import { ThreadType } from '@types';

const threadSchema = new Schema<ThreadType>({
    author: {
        type: String,
        required: [true, 'Author is Required'],
    },
    content: {
        type: String,
        required: [true, 'Content is Required'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Thread = models.Thread || model<ThreadType>('Thread', threadSchema);

export default Thread;