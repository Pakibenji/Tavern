export interface ThreadType {
  _id: string;
  author: string;
  content: string;
  date: Date;
}
export interface ThreadProps {
  threads: ThreadType;
}
export interface NewThreadProps {
  setThreadContent: (content: string) => void;
  handleCreateThread: () => void;
}
export interface ThreadDetailProps {
  params: {
    id: string;
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
  displayName: string;
  photoUrl?: string;
}

export interface authContextType{
  user: UserContextType;
  loginSession: (user: UserContextType) => void;
  logoutSession: () => void;
  isLogin: boolean;
}

