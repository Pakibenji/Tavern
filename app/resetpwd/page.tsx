"use client";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "@app/api/auth/firebase-config";
import styles from "./page.module.css";
import { littleTitle } from "@app/fonts";

const page = () => {
  const [email, setEmail] = useState("");

  const auth = getAuth(app);

  const PasswordResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <>
    <h2 style={littleTitle.style} className={styles.loginTitle}>RESET PASSWORD</h2>
      <form onSubmit={() => PasswordResetEmail()} className={styles.form}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <button type="submit">Reset Password</button>
      </form>
    </>
  );
};

export default page;
