import LoginForm from '@app/components/LoginForm';
import React from 'react';
import { littleTitle } from '@app/fonts';

const page = () => {
    return (
        <div>
            <h2 style={littleTitle.style}>LOGIN</h2>
            <LoginForm />
        </div>
    );
};

export default page;