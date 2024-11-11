// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfe_cjAX2PEIW02ASgjQF5ueC0iYNQhBM",
  authDomain: "auth-project-71b4f.firebaseapp.com",
  projectId: "auth-project-71b4f",
  storageBucket: "auth-project-71b4f.firebasestorage.app",
  messagingSenderId: "121869320551",
  appId: "1:121869320551:web:12cfb26265a3e7e8366fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);