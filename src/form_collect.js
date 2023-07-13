// import firebase from "firebase/app";
import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMh4qrZruDoGeuMy7YzCKppdK_YM8KmN8",
  authDomain: "yabble-2de5e.firebaseapp.com",
  projectId: "yabble-2de5e",
  storageBucket: "yabble-2de5e.appspot.com",
  messagingSenderId: "1004412745666",
  appId: "1:1004412745666:web:97cf38d7d202e7332ec85b",
  measurementId: "G-QH4BB2VQ3P",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

export default db;
