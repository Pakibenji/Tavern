import React from 'react';

import { NewThreadProps } from '@types';

const NewThread = ({setThreadAuthor, setThreadContent, setThreadTitle, handleCreateThread}: NewThreadProps ) => {
    return (
        <div className='new-thread'>
            <h2>Create a new thread</h2>
            <form onSubmit={handleCreateThread}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' onChange={(e) => setThreadAuthor(e.target.value)} />
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' onChange={(e) => setThreadTitle(e.target.value)} />
                <label htmlFor='content'>Content</label>
                <textarea id='content' onChange={(e) => setThreadContent(e.target.value)} />
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default NewThread;