// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwGPtWVrG1JJzGpv8uqDTt7zbbq2a5h-4",
  authDomain: "auth-17d7f.firebaseapp.com",
  projectId: "auth-17d7f",
  storageBucket: "auth-17d7f.firebasestorage.app",
  messagingSenderId: "933701269727",
  appId: "1:933701269727:web:e35f8153c26918590e516a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDB= getFirestore(app)