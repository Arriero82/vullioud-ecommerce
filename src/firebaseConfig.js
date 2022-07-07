  import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfnrwIEc_WdLut2soWq3xDjKo66eWtzhs",
  authDomain: "vullioud-ecommerce.firebaseapp.com",
  projectId: "vullioud-ecommerce",
  storageBucket: "vullioud-ecommerce.appspot.com",
  messagingSenderId: "846535095846",
  appId: "1:846535095846:web:e345f3dd38d218c8ce98e7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionConcerts = collection(db, "concerts");