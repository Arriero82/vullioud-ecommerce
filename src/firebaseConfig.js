// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore, addDoc, collection} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfnrwIEc_WdLut2soWq3xDjKo66eWtzhs",
  authDomain: "vullioud-ecommerce.firebaseapp.com",
  projectId: "vullioud-ecommerce",
  storageBucket: "vullioud-ecommerce.appspot.com",
  messagingSenderId: "846535095846",
  appId: "1:846535095846:web:e345f3dd38d218c8ce98e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionConcerts = collection(db, "concerts");