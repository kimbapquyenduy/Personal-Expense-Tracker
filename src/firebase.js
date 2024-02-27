// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "pesonal-tracker.firebaseapp.com",
  projectId: "pesonal-tracker",
  storageBucket: "pesonal-tracker.appspot.com",
  messagingSenderId: "1079018549555",
  appId: "1:1079018549555:web:6dbadf7bef6c5cf8478e46",
  measurementId: "G-DPXWNM7SJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
