import LoginForm from '@app/components/LoginForm';
import React from 'react';
import { littleTitle } from '@app/fonts';
import styles from './page.module.css';

const page = () => {
    return (
        <>
            <h2 style={littleTitle.style} className={styles.loginTitle}>LOGIN</h2>
            <LoginForm />
        </>
    );
};

export default page;