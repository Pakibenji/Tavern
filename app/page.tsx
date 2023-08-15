'use client'

import NewThread from "./components/NewThread";
import { useState } from "react"

export default function Home() {
  const [threadTitle, setThreadTitle] = useState('')
  const [threadContent, setThreadContent] = useState('')
  const [threadAuthor, setThreadAuthor] = useState('')

  const handleCreateThread = async () => {
    try {
      const res = await fetch('/api/thread/new', {
        method: 'POST',
        body: JSON.stringify({
          title: threadTitle,
          content: threadContent,
          author: threadAuthor,
          date: new Date(),
    }    ),
      })
      const json = await res.json()
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <main>
      <NewThread setThreadAuthor={setThreadAuthor} setThreadContent={setThreadContent} setThreadTitle={setThreadTitle} handleCreateThread={handleCreateThread}/>
    </main>
  )
}
