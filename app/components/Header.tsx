import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { lato } from '@app/fonts';
const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><h1 style={lato.style}>TOUITER</h1></Link>
            <div className={styles["link-container"]}>
            <Link href="/register" style={lato.style}>Register</Link>
            <Link href="/login" style={lato.style}>Login</Link>
            </div>
        </header>
    );
};

export default Header