// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjaas6ATsa9HUkWwZ-g1iDy8osx5S09NY",
  authDomain: "pandal-locator.firebaseapp.com",
  projectId: "pandal-locator",
  storageBucket: "pandal-locator.appspot.com",
  messagingSenderId: "796543256801",
  appId: "1:796543256801:web:a58fdf98cd717430978fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
