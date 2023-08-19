'use client'
import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { lato } from '@app/fonts';
import { useContext } from 'react'
import { AuthContext } from '@app/context/AuthContext';
const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <header className={styles.header}>
            <Link href="/"><h1 style={lato.style}>TOUITER</h1></Link>
            <div className={styles["link-container"]}>
                { user ? <Link href="/profile" style={lato.style}>Profile</Link> : null
                }
            <Link href="/register" style={lato.style}>Register</Link>
            <Link href="/login" style={lato.style}>Login</Link>
            </div>
        </header>
    );
};

export default Header