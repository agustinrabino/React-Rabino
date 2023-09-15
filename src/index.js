import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import { ToastContainer } from 'react-toastify';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsnyGotPNtLWcXkSrtgoECRMSfyIyE-yU",
  authDomain: "proyectofinalreact-rabino.firebaseapp.com",
  projectId: "proyectofinalreact-rabino",
  storageBucket: "proyectofinalreact-rabino.appspot.com",
  messagingSenderId: "472629807682",
  appId: "1:472629807682:web:ed484eb3fcb2056234fbdb"
};
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <App />
        <ToastContainer limit={2}/>
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);
