
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1vOZExGp4LFQZ2z07b094aOCyP0zFAXw",
  authDomain: "auth-app-8dbd8.firebaseapp.com",
  projectId: "auth-app-8dbd8",
  storageBucket: "auth-app-8dbd8.appspot.com",
  messagingSenderId: "137566051349",
  appId: "1:137566051349:web:aab01f2764c0d2584bc21c"
};


const app = initializeApp(firebaseConfig);
console.log (app)