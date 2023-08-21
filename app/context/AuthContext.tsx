"use client";
import { UserContextType, authContextType} from "@types";
import React, { createContext, useState, useEffect } from "react";
import { useRouter} from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export const AuthContextDefaultValues: authContextType = {
  user: 
    {
      email: "",
      uid: "",
      jwt: "",
      displayName: "",
    },
  loginSession: (user: UserContextType) => {},
  logoutSession: () => {},
  isLogin: false
};

export const AuthContext = createContext<authContextType>(
  AuthContextDefaultValues
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserContextType>(
    AuthContextDefaultValues.user
  );
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();

  const loginSession= (user: UserContextType) => {
    setUser(user);
    saveSession(user);
    setIsLogin(true);
  }

  const logoutSession = () => {
    setUser(AuthContextDefaultValues.user);
    destroySession();
    setIsLogin(false);
    router.push("/");
  }

  const userSession = () => {
    const userSession =  localStorage.getItem("user");
    if (userSession) {
      const user = JSON.parse(userSession);
      setUser(user);
      setIsLogin(true);
    } else {
      setUser(AuthContextDefaultValues.user);
      setIsLogin(false);
    }
  };

  const saveSession = (user: UserContextType) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const destroySession = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    userSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginSession,
        logoutSession,
        isLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}






