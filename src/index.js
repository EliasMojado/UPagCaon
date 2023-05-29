import React from 'react';
import ReactDOM from 'react-dom/client';

import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

import Landing from './landing';
import Login from './Pages/Login/Login';
import "./landing.css";
import "./Pages/Login/Login.css";

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/login' element = {<Login/>} />
      </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
