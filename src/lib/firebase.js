// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBlANzuxiJogbVG_wfTQRpJRyO5jA8IE54",
  authDomain: "arkilla-100f8.firebaseapp.com",
  projectId: "arkilla-100f8",
  storageBucket: "arkilla-100f8.appspot.com",
  messagingSenderId: "844813203384",
  appId: "1:844813203384:web:19f0f7c91e33b024b7014d",
  measurementId: "G-EYRX9VQ03N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);