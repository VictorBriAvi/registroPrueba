import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-5aPZVgu7zlAM8-ueoIt-LJoFnymMTyM",
  authDomain: "pruebapeluqueria-50774.firebaseapp.com",
  projectId: "pruebapeluqueria-50774",
  storageBucket: "pruebapeluqueria-50774.appspot.com",
  messagingSenderId: "681147642361",
  appId: "1:681147642361:web:760d41a218e139ae6e0d28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
