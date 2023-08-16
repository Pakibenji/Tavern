'use client'

import {ThreadType } from "@types";
import NewThread from "./components/NewThread";
import { useState, useEffect } from "react"
import Thread from "./components/Thread";

export default function Home() {
  const [threadTitle, setThreadTitle] = useState('')
  const [threadContent, setThreadContent] = useState('')
  const [threadAuthor, setThreadAuthor] = useState('')
  const [allThreads, setAllThreads] = useState([])

  const handleCreateThread = async () => {
    try {
      const res = await fetch('/api/thread/new', {
        method: 'POST',
        body: JSON.stringify({
          title: threadTitle,
          content: threadContent,
          author: threadAuthor,
          date: Date.now,
        }),
      }); 
      if (res.ok) {
        setThreadTitle('')
        setThreadContent('')
      }
    } catch (error) {
      console.error(error)
    }
  };


  const getThreads = async () => {
    try {
      const res = await fetch('/api/thread/all')
      const data = await res.json()
      setAllThreads(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getThreads()
  }, [])


  return (
    <main>
      <NewThread setThreadAuthor={setThreadAuthor} setThreadContent={setThreadContent} setThreadTitle={setThreadTitle} handleCreateThread={handleCreateThread}/>
      <div>
        {allThreads.length > 0 && allThreads.map((threads: ThreadType ) => (
          <Thread key={threads._id} threads={threads} />
        ))}
      </div>
    </main>
  )
}
