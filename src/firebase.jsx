//1 Me traigo el metodo de autenticacion con firebase

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//2 traig los keys privados de la plataforma web
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
//3 me aautentico usando el metodo del paso 1 y del paso 2
export const app = initializeApp(firebaseConfig);

//4 obtener una referenica/puntero a la base de datos

const db = getFirestore(app)