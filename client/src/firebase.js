// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5ab1d.firebaseapp.com",
  projectId: "mern-blog-5ab1d",
  storageBucket: "mern-blog-5ab1d.appspot.com",
  messagingSenderId: "324770946702",
  appId: "1:324770946702:web:0b5e11cac9336e07fcf3df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

