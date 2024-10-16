/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDFBCJkoWJPaPOy9gAOb-w3c1RV3_BAqs",
  authDomain: "myinternalregs1.firebaseapp.com",
  projectId: "myinternalregs1",
  storageBucket: "myinternalregs1.appspot.com",
  messagingSenderId: "969531463311",
  appId: "1:969531463311:web:eb35805cf103f4f3dd02fa",
  measurementId: "G-E7M5KDQW2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default db;
