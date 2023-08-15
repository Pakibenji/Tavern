import { Schema, model, models } from 'mongoose';

import { ThreadType } from '@types';

const threadSchema = new Schema<ThreadType>({
    title: {
        type: String,
        required: [true, 'Title is Required'],
},
    author: {
        type: String,
        default: 'Anonymous',
        
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