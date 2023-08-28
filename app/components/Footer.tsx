import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p> © Benjamin Alcade, tous droits réservé</p>
            <Link href="/rgpd">GDRP</Link>
        </footer>
    );
};

export default Footer;