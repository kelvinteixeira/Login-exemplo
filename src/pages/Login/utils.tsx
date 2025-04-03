// src/components/Login/utils.ts
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export async function googleLogin() {
  try {
    await signInWithPopup(auth, googleProvider);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Google login failed");
  }
}