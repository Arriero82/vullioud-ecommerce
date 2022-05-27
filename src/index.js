/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


//import algo from ruta relativa o ruta paquete
//traigo la libreria de React
import React from 'react';
//traigo la libreria de ReactDOM
import ReactDOM from 'react-dom/client'; 

import App from "./App";

/*
const App2 = () => 'Hola Mundo con JSX y Arrow function';

function App(){
  return 'Hola Mundo con JSX'
};
*/

//import App from './App';

//mostrar la App en el DOM
//crea un punto inicial (root) en donde la app se va a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

