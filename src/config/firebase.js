/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASkW2hoI7IvmnFNU0Mxje-am0OsESaELo",
  authDomain: "myinternalregs.firebaseapp.com",
  projectId: "myinternalregs",
  storageBucket: "myinternalregs.appspot.com",
  messagingSenderId: "689683351774",
  appId: "1:689683351774:web:3ed8d57d3c19fba6655a4f",
  measurementId: "G-GTEL5TJWVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default db;
