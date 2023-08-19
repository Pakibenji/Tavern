"use client";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { lato } from "@app/fonts";
import { useContext } from "react";
import { AuthContext } from "@app/context/AuthContext";
const Header = () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 style={lato.style}>TOUITER</h1>
      </Link>
      <div className={styles["link-container"]}>
        { isLogin ? (
          <Link href="/profile" style={lato.style}>
            Profile
          </Link>
        ) : <div>
          <Link href="/register" style={lato.style}>
            Register
          </Link>
          <Link href="/login" style={lato.style}>
            Login
          </Link>
        </div>}
        
      </div>
    </header>
  );
};

export default Header;
