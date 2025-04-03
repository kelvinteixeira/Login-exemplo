// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlKgzPbM396OpbVPQXPpexnEwy92vrjgo",
  authDomain: "login-exemplo-9f419.firebaseapp.com",
  projectId: "login-exemplo-9f419",
  storageBucket: "login-exemplo-9f419.firebasestorage.app",
  messagingSenderId: "166096767424",
  appId: "1:166096767424:web:987fae7ada84ace43f2025",
  measurementId: "G-8NE7R5WJHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
