'use client';
import React, {useState} from 'react';
import styles from './NewThread.module.css'
import { littleTitle } from '@app/fonts';
import { NewThreadProps } from '@types';

const NewThread = ({setThreadContent, setThreadTitle, handleCreateThread}: NewThreadProps ) => {
    const [showtextarea, setShowtextarea] = useState(false);

    const handleShowTextarea = () => {
        setShowtextarea(!showtextarea);
    };

    return (
        <div className={styles['new-thread']}>
            <h2 style={littleTitle.style}>NEW THREAD</h2>
            <form onSubmit={() => handleCreateThread()}>
                <input type='text' id='title' placeholder="TITLE" onClick={() => handleShowTextarea()} onChange={(e) => setThreadTitle(e.target.value)} />
                { showtextarea && <textarea id='content' placeholder='CONTENT' onChange={(e) => setThreadContent(e.target.value)} /> }
                { showtextarea && <button type='submit'>POST</button>}
            </form>
        </div>
    );
};

export default NewThread;