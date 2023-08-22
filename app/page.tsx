'use client'

import {ThreadType, CommentType } from "@types";
import NewThread from "./components/NewThread";
import React, { useState, useEffect, useContext } from "react"
import Thread from "./components/Thread";
import { AuthContext } from "./context/AuthContext";

export default function Home() {
  const [threadContent, setThreadContent] = useState('')
  const [allThreads, setAllThreads] = useState([])
  const { user, isLogin } = useContext(AuthContext)

  const handleCreateThread = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      if (threadContent === '')
        return alert('Please enter a message')
    try {
      const res = await fetch('/api/thread/new', {
        method: 'POST',
        body: JSON.stringify({
          content: threadContent,
          author: user.displayName,
          date: Date.now,
        }),
      }); 
      if (res.ok) {
        setThreadContent('')
        getThreads()
      }
    } catch (error) {
      console.error(error)
    }
  };


  const getThreads = async () => {
    try {
      const res = await fetch('/api/thread/all')
      const data = await res.json()
      const sortedData = data.sort((a: ThreadType, b: ThreadType) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      setAllThreads(sortedData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getThreads()
  }, [])

    
  return (
    <main>
      { isLogin && <NewThread setThreadContent={setThreadContent} handleCreateThread={handleCreateThread}/>}
      <div>
        { allThreads && allThreads.length > 0 && allThreads.map((threads: ThreadType) => (
          <Thread key={threads._id} threads={threads} />
        ))}
      </div>
    </main>
  )
}


