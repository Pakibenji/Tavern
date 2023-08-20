import RegisterForm from '@app/components/RegisterForm';
import React from 'react';
import { littleTitle } from '@app/fonts';

const page = () => {
    return (
        <div className=''>
            <h2 style={littleTitle.style}>REGISTER</h2>
            <RegisterForm />
        </div>
    );
};

export default page;