import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './assets/scss/app.scss'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import SettingProvider from './helpers/theme/SettingProvider';
import CartProvider from './helpers/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SettingProvider>
      <CartProvider>
        <Router/>
      </CartProvider>
    </SettingProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
