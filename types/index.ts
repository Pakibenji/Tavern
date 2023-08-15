export interface ThreadType {
    _id: string;
    title: string;
    author: string;
    content: string;
    date: Date;
}

export interface NewThreadProps {
    setThreadTitle : (title: string) => void;
    setThreadContent : (content: string) => void;
    setThreadAuthor : (author: string) => void;
    handleCreateThread: () => void;
}