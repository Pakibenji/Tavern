// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "touiter-bc251.firebaseapp.com",
  projectId: "touiter-bc251",
  storageBucket: "touiter-bc251.appspot.com",
  messagingSenderId: "60898420496",
  appId: "1:60898420496:web:15cff101bd91783fbee795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;