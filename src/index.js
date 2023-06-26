import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import AboutUs from '../src/Pages/AboutUs/AboutUs';

import Landing from '../src/Pages/Customer/Landing/Landing';
import Home from '../src/Pages/Customer/Home/Home';
import ViandsUser from '../src/Pages/Customer/Home/Viands';
import DrinksUser from '../src/Pages/Customer/Home/Drinks';
import SnacksUser from '../src/Pages/Customer/Home/Snacks';
import OthersUser from '../src/Pages/Customer/Home/Others';
import Cart from '../src/Pages/Customer/Cart/Cart';
import Track from '../src/Pages/Customer/Cart/Track';
import Profile from '../src/Pages/Customer/Profile/Profile';

import Admin from '../src/Pages/Admin/Landing/Landing';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import Employee from './Pages/Admin/Employee/Employee';
import Viands from './Pages/Admin/Viands/Viands';
import Drinks from './Pages/Admin/Drinks/Drinks';
import Snacks from "./Pages/Admin/Snacks/Snacks";
import Others from "./Pages/Admin/Others/Others";
import Orders from "./Pages/Admin/Orders/Orders";
import Profits from "./Pages/Admin/Profits/Profits";
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
        <Route path = '/viand' element = {<ViandsUser/>} />
        <Route path = '/drink' element = {<DrinksUser/>} />
        <Route path = '/snack' element = {<SnacksUser/>} />
        <Route path = '/other' element = {<OthersUser/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/track' element = {<Track/>} />
        <Route path = '/profile' element = {<Profile/>} />

        {/* Admin */}
        <Route path='/admin' element = {<Admin/>} />
        <Route path='/admin/dashboard' element = {<Dashboard/>} />
        <Route path='/admin/employee' element = {<Employee/>} />
        <Route path='/admin/viands' element = {<Viands/>} />
        <Route path='/admin/drinks' element = {<Drinks/>} />
        <Route path='/admin/snacks' element = {<Snacks/>} />
        <Route path='/admin/others' element = {<Others/>} />
        <Route path='/admin/orders' element = {<Orders/>} />
        <Route path='/admin/earnings' element = {<Profits/>} />

        {/* About Us */}
        <Route path = '/about' element = {<AboutUs/>} />

      </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
