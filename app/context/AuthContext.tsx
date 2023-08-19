"use client";
import { UserContextType, authContextType} from "@types";
import React, { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthContextDefaultValues: authContextType = {
  user: 
    {
      email: "",
      uid: "",
      jwt: "",
    },
  loginSession: (user: UserContextType) => {},
  logoutSession: () => {},
};

export const AuthContext = createContext<authContextType>(
  AuthContextDefaultValues
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserContextType>(
    AuthContextDefaultValues.user
  );

  const loginSession= (user: UserContextType) => {
    setUser(user);
    saveSession(user);
  }

  const logoutSession = () => {
    setUser(AuthContextDefaultValues.user);
    destroySession();
  }

  const userSession = () => {
    const userSession =  localStorage.getItem("user");
    if (userSession) {
      const user = JSON.parse(userSession);
      setUser(user);
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
        logoutSession
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}






