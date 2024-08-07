// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnSiTa7KLYZ4K5IaXnIjrOWQpITYV_EyM",
  authDomain: "netflex-gpt-cf833.firebaseapp.com",
  projectId: "netflex-gpt-cf833",
  storageBucket: "netflex-gpt-cf833.appspot.com",
  messagingSenderId: "914158442287",
  appId: "1:914158442287:web:2c73fcf3b59759644fb3da",
  measurementId: "G-Z1JXQBZXWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
