export interface ThreadType {
    _id: string;
    title: string;
    author: string;
    content: string;
    date: Date;
}

export interface ThreadProps {
    threads: ThreadType;
}

export interface NewThreadProps {
    setThreadTitle : (title: string) => void;
    setThreadContent : (content: string) => void;
    setThreadAuthor : (author: string) => void;
    handleCreateThread: () => void;
}

export interface ThreadDetailProps {
    params: {
      id: string;
      title?: string;
    content?: string;
    };
  }