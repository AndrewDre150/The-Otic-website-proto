import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from './components/AboutsUsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import the functions you need from the SDKs you need


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <BrowserRouter><Routes>
      <Route path="/"  element={<App />}  />
      <Route path="/AboutUs"  element={<AboutUsPage />}  />
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/footer' element={<Footer></Footer>}></Route>
      </Routes></BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
