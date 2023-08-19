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
  setThreadTitle: (title: string) => void;
  setThreadContent: (content: string) => void;
  setThreadAuthor: (author: string) => void;
  handleCreateThread: () => void;
}
export interface ThreadDetailProps {
  params: {
    id: string;
    title?: string;
    content?: string;
  };
}
export interface LoginProps {
  email: string;
  password: string;
  confirmPassword?: string;
  task: string;
}

export interface UserContextType{
  email: string;
  uid: string;
  jwt: string;
}

export interface authContextType{
  user: UserContextType;
  loginSession: (user: UserContextType) => void;
  logoutSession: () => void;
}

