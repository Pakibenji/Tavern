'use client';
import React, {useState} from 'react';
import styles from './NewThread.module.css'
import { bigTitle } from '@app/fonts';
import { NewThreadProps } from '@types';

const NewThread = ({setThreadContent, handleCreateThread}: NewThreadProps ) => {
    const [showtextarea, setShowtextarea] = useState(false);

    const handleShowTextarea = () => {
        setShowtextarea(!showtextarea);
    };

    return (
        <div className={styles['new-thread']}>
            <form onSubmit={handleCreateThread}>
                <textarea id='content' placeholder='SPEAK'  style={bigTitle.style} onClick={() => handleShowTextarea()}  onChange={(e) => setThreadContent(e.target.value)} /> 
                { showtextarea && <button type='submit' style={bigTitle.style}>POST</button>}
            </form>
        </div>
    );
};

export default NewThread;