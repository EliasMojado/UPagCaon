import React from 'react';
import ReactDOM from 'react-dom/client';

import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

import Landing from '../src/Pages/Customer/Landing/Landing';
import Home from '../src/Pages/Customer/Home/Home';
import Admin from '../src/Pages/Admin/Landing/Landing';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import Employee from './Pages/Admin/Employee/Employee';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
     <Router>
      <Routes>
        {/* Customer */}
        <Route path='/' element = {<Landing/>} />
        <Route path='/home' element = {<Home/>} />

        {/* Admin */}
        <Route path='/admin' element = {<Admin/>} />
        <Route path='/admin/dashboard' element = {<Dashboard/>} />
        <Route path='/admin/employee' element = {<Employee/>} />
      </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
