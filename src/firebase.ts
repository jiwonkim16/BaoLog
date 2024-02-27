// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWZCPIhZsM32drX9tPtz9ZYUbCw-pCRRk",
  authDomain: "baolog-f886e.firebaseapp.com",
  projectId: "baolog-f886e",
  storageBucket: "baolog-f886e.appspot.com",
  messagingSenderId: "125681451952",
  appId: "1:125681451952:web:7b248090f3e3e2e8e5cc75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
