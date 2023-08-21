'use client'
import { AuthContext } from '../context/AuthContext'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ThreadType } from '@types';
import Thread from '@app/components/Thread';

const page = () => {
    const [userThreads, setUserThreads] = useState([])
    const { user, logoutSession, isLogin } = useContext(AuthContext)
    const router = useRouter()

    const myThreads = async () => {
        try {
          const res = await fetch('/api/thread/all')
          const data = await res.json()
            const userThreads = data.filter((thread: ThreadType) => thread.author === user.displayName)
            setUserThreads(userThreads)
        } catch (error) {
          console.error(error)
        }
      }

    useEffect(() => {
    if (!isLogin) {
        router.push('/login')
    } else {
        myThreads()
    }
    }, [])



    return (
        <div>
            {isLogin && <div><h1>Profile</h1>
            <p>{user.displayName}</p>
            <h3>My Threads</h3>
            {userThreads && userThreads.length > 0 && userThreads.map((thread: ThreadType) => (
                <Thread key={thread._id} threads={thread} />
            ))} 
            {userThreads && userThreads.length === 0 && <p>You have no threads</p>}
            <button onClick={() => logoutSession()}>Logout</button>
            </div>
    }   
        </div>
    );
};

export default page;
