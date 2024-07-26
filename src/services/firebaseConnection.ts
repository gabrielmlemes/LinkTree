import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEXbbSeUo_Umqz71F-ET8YgQTFbu0UTJ0",
  authDomain: "reactlinks-e911b.firebaseapp.com",
  projectId: "reactlinks-e911b",
  storageBucket: "reactlinks-e911b.appspot.com",
  messagingSenderId: "797049432001",
  appId: "1:797049432001:web:bde8493b750a71a3557140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}