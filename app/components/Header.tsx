import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><h1>TOUITER</h1></Link>
            <div className={styles["link-container"]}>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            </div>
        </header>
    );
};

export default Header