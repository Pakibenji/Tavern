"use client";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { bigTitle, littleTitle } from "@app/fonts";
import { useContext } from "react";
import { AuthContext } from "@app/context/AuthContext";

const Header = () => {
  const { isLogin, user } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 style={bigTitle.style}>TAVERN</h1>
      </Link>
      <div className={ isLogin ? styles.login : styles["link-container"]}>
        {isLogin ? (
          <Link href="/profile" style={bigTitle.style}>
            {user.displayName[0].toUpperCase()}
          </Link>
        ) : (
          <div className={styles.notlogin}>
            <Link href="/register" style={littleTitle.style}>
              Register
            </Link>
            <Link href="/login" style={littleTitle.style}>
              Login
            </Link>
          </div>
        )}
      </div>
        <h2 style={littleTitle.style}>To Speak Truth</h2>
    </header>
  );
};

export default Header;
