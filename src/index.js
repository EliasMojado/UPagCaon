import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import Landing from '../src/Pages/Customer/Landing/Landing';
import Home from '../src/Pages/Customer/Home/Home';
import Admin from '../src/Pages/Admin/Landing/Landing';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import Employee from './Pages/Admin/Employee/Employee';
import Viands from './Pages/Admin/Viands/Viands';
import Drinks from './Pages/Admin/Drinks/Drinks';
import Snacks from "./Pages/Admin/Snacks/Snacks";
import Others from "./Pages/Admin/Others/Others";
import Orders from "./Pages/Admin/Orders/Orders";
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
        <Route path='/admin/viands' element = {<Viands/>} />
        <Route path='/admin/drinks' element = {<Drinks/>} />
        <Route path='/admin/snacks' element = {<Snacks/>} />
        <Route path='/admin/others' element = {<Others/>} />
        <Route path='/admin/orders' element = {<Orders/>} />
      </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
