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

  export interface UserType {
    _id: string;
    email: string;
    password: string;
    date: Date;
    accessToken: string;
}

  export interface LoginProps {
    email: string;
    password: string;
    confirmPassword?: string;
    task: string;
  }
