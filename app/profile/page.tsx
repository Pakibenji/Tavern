'use client'

import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const page = () => {
    const { user, logoutSession } = useContext(AuthContext)
    
    return (
        <div>
            <h1>Profile Page</h1>
            <p>{user?.email}</p>
            
            <button onClick={() => logoutSession()}>Logout</button>
        </div>
    );
};

export default page;
