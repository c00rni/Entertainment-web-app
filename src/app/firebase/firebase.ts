// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQgRLE_Qqnijf4XN8A7_s0g3SHeVB7hQE",
  authDomain: "streaming-platform-2a287.firebaseapp.com",
  projectId: "streaming-platform-2a287",
  appId: "1:409763140727:web:74ff5d74fdd3688b3ce272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions();

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelpter(
  callback: (user: User | null) => void,
) {
  return onAuthStateChanged(auth, callback);
}
