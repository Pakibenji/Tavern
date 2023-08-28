"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginProps } from "@types";
import Router from "next/navigation";
import styles from "./RegisterForm.module.css";

async function registerUser(data: LoginProps) {
  const URL = "/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);
  return response;
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email === "" || password === "" || confirm === "") {
      setMessage("Please fill all fields");
      setHasError(true);
      return;
    }
    if (password !== confirm) {
      setMessage("Password and Confirm Password are different");
      setHasError(true);
      return;
    }
    setMessage("");
    setHasError(false);

    const response = await registerUser({
      displayName,
      email,
      password,
      task: "register",
    });
    const responseJson = await response.json();
    if (responseJson.status === 200) {
      setEmail("");
      setPassword("");
      setConfirm("");
      setDisplayName("");
      setMessage(`${responseJson.message}`);
      Router.push("/login");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setHasError(true);
      setMessage(responseJson.message);
    }
  }

  function toggleShow() {
    setShowPassword((current) => !current);
  }
  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          className={styles.email}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="displayName">Name</label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          className={styles.email}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDisplayName(e.target.value)
          }
        />
        <label htmlFor="password">Password</label>
        <div className={styles.passEye}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            className={styles.password}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />{" "}
          {showPassword && <FaEyeSlash onClick={toggleShow} />}
          {!showPassword && <FaEye onClick={toggleShow} />}
        </div>
        <div className="pass-eye">
          <input
            type={showPassword ? "text" : "password"}
            id="confirm"
            value={confirm}
            className={styles.passwordConfirm}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirm(e.target.value)
            }
          />
        </div>
        <input type="submit" value="Create" className={styles.btn} />
      </form>
      <div className={styles.account}> <span>Already have an account?</span>{" "} <Link href="/login">Login</Link>
      {message && (
        <div className={hasError ? styles.error : styles.ok}>{message}</div>
      )}</div>
      
    </>
  );
}
