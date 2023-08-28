"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginProps } from "@types";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";

async function loginUser(data: LoginProps) {
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { loginSession } = useContext(AuthContext);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage("Please fill in all fields");
      setHasError(true);
      return;
    }
    setHasError(false);
    const response = await loginUser({
      email,
      password,
      displayName,
      task: "login",
    });
    const responseJson = await response.json();
    if (responseJson.status === 200) {
      loginSession({
        email: responseJson.email,
        uid: responseJson.uid,
        jwt: responseJson.jwt,
        displayName: responseJson.displayName,
      });
      setEmail("");
      setPassword("");
      setMessage(responseJson.message);

      setTimeout(() => {
        setMessage("");
        router.push("/");
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
      <form onSubmit={handleSubmit} className={styles.formContainer}>
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
        <input type="submit" value="login" className={styles.btn} />
      </form>
      <div className={styles.account}>
        <span>No account yet? </span>{" "}
        <Link href="/register"> Go to register page</Link>
        {message && <div className={hasError ? styles.error : styles.ok }>{message}</div>}
      </div>
      <Link href="/resetpwd" className={styles.forgot}>Password forgotten</Link>
    </>
  );
}
