// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmS7EcpBDCFUYdEOzVg42sBaaF2w-JNZo",
  authDomain: "vchat-jt99.firebaseapp.com",
  projectId: "vchat-jt99",
  storageBucket: "vchat-jt99.firebasestorage.app",
  messagingSenderId: "860841243412",
  appId: "1:860841243412:web:1a4c27554fd4e2be150801",
  measurementId: "G-780W7NV55Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
