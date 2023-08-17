import React from 'react';
import styles from './NewThread.module.css'
import { homenaje } from '@app/fonts';
import { NewThreadProps } from '@types';

const NewThread = ({setThreadAuthor, setThreadContent, setThreadTitle, handleCreateThread}: NewThreadProps ) => {
    return (
        <div className={styles['new-thread']}>
            <h2 style={homenaje.style}>NEW THREAD</h2>
            <form onSubmit={() => handleCreateThread()}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' onChange={(e) => setThreadTitle(e.target.value)} />
                <label htmlFor='content'>Content</label>
                <textarea id='content' onChange={(e) => setThreadContent(e.target.value)} />
                <button type='submit'>POST</button>
            </form>
        </div>
    );
};

export default NewThread;