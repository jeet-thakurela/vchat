;
// src/firebase/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth (for login/signup)
import { getFirestore } from 'firebase/firestore'; // If you plan to use Firestore for storing data

// Your Firebase configuration
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

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);  // You can use this if you need Firestore

export { auth, db };
