import RegisterForm from '@app/components/RegisterForm';
import React from 'react';
import { littleTitle } from '@app/fonts';
import styles from './page.module.css';

const page = () => {
    return (
        <>
            <h2 style={littleTitle.style} className={styles.registerTitle}>REGISTER</h2>
            <RegisterForm />
        </>
    );
};

export default page;