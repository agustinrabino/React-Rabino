import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from "./hooks/ShoppingCartContext.jsx";
import { ToastContainer } from 'react-toastify';



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
