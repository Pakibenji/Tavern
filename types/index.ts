export interface ThreadType {
  _id: string;
  author: string;
  content: string;
  date: Date;
  comments?: CommentType[];
}
export interface ThreadProps {
  threads: ThreadType;
}
export interface NewThreadProps {
  setThreadContent: (content: string) => void;
  threadContent: string;
  handleCreateThread: (e: React.FormEvent<HTMLFormElement>) => void;
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
  displayName?: string;
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

export interface CommentType {
  _id: string;
  content: string;
  author: string;
  date: Date;
  threadId: string;
}

export interface CommentProps {
  params: {
    id: string;
  };
}

export interface CommentTypeProps {
  comments: CommentType;
  getsComments: () => void;
}


export interface NewCommentProps {
  setCommentsContent: (content: string) => void;
  handleCreateComment: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsComment: (isComment: boolean) => void;
}


