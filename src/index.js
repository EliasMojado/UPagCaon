import React from 'react';
import ReactDOM from 'react-dom/client';

import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

import Landing from '../src/Pages/Customer/Landing/Landing';
import Admin from '../src/Pages/Admin/Landing/Landing';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/admin' element = {<Admin/>} />
        <Route path='/admin/dashboard' element = {<Dashboard/>} />
      </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
