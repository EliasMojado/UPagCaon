import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../Dashboard/Dashboard.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from '../../../Assets/logowhite.svg';
import home from '../../../Assets/NavIcons/home.svg';
import user from '../../../Assets/NavIcons/user.svg';
import viand from '../../../Assets/NavIcons/viand.svg';
import drink from '../../../Assets/NavIcons/drink.svg';
import snack from '../../../Assets/NavIcons/snack.svg';
import schoolsupply from '../../../Assets/NavIcons/schoolsupply.svg';
import cart from '../../../Assets/NavIcons/cart.svg';
import wallet from '../../../Assets/NavIcons/wallet.svg';
import shutdown from '../../../Assets/NavIcons/shutdown.svg';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState('home');
  const logout = () =>{
    window.location.href = '/admin';
    localStorage.removeItem('user');
  }

  useEffect(() => {
    switch (true) {
      case location.pathname.includes('/admin/dashboard'):
        setSelected('home');
        break;
      case location.pathname.includes('/admin/employee'):
        setSelected('user');
        break;
      case location.pathname.includes('/admin/viands'):
        setSelected('viand');
        break;
      case location.pathname.includes('/admin/drinks'):
        setSelected('drink');
        break;
      case location.pathname.includes('/admin/snacks'):
        setSelected('snack');
        break;
      case location.pathname.includes('/admin/others'):
        setSelected('schoolsupply');
        break;
      case location.pathname.includes('/admin/orders'):
        setSelected('cart');
        break;
      case location.pathname.includes('/admin/profit'):
        setSelected('wallet');
        break;
      default:
        setSelected('home');
        break;
    }
  }, [location]);
  

  const goToHomePage = () => {
    navigate('/admin/dashboard', { replace: true });
  }

  const goToEmployeePage = () => {
    navigate('/admin/employee', { replace: true });
  }

  const goToViandPage = () => {
    navigate('/admin/viands', { replace: true});
  }

  const goToDrinkPage = () => {
    navigate('/admin/drinks', { replace: true});
  }

  const goToSnackPage = () => {
    navigate('/admin/snacks', { replace: true});
  }

  const goToOtherPage = () => {
    navigate('/admin/others', { replace: true});
  }

  const goToOrderPage = () => {
    navigate('/admin/orders', { replace: true});
  }

  const goToProfitPage = () => {
    navigate('/admin/profits', { replace: true});
  }

  return (
    <SideNav
      style={{ backgroundColor: '#481E1E' }}
      onSelect={() => {}}
    >
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div></div>
      <SideNav.Toggle />
      <SideNav.Nav selected= {selected}>
        <NavItem eventKey="home" onClick = {goToHomePage}>
          <NavIcon>
            <img src={home} alt="home" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Home</NavText>
        </NavItem>
        <NavItem eventKey="user" onClick = {goToEmployeePage}>
          <NavIcon>
            <img src={user} alt="user" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Employees</NavText>
        </NavItem>
        <NavItem eventKey="viand" onClick = {goToViandPage}>
          <NavIcon>
            <img src={viand} alt="viand" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Viands</NavText>
        </NavItem>
        <NavItem eventKey="drink" onClick = {goToDrinkPage}>
          <NavIcon>
            <img src={drink} alt="drink" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Beverages</NavText>
        </NavItem>        
        <NavItem eventKey="snack" onClick = {goToSnackPage}>
          <NavIcon>
            <img src={snack} alt="snack" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Snacks</NavText>
        </NavItem>
        <NavItem eventKey="schoolsupply" onClick = {goToOtherPage}>
          <NavIcon>
            <img src={schoolsupply} alt="schoolsupply" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Others</NavText>
        </NavItem>
        <NavItem eventKey="cart" onClick = {goToOrderPage}>
          <NavIcon>
            <img src={cart} alt="cart" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Orders</NavText>
        </NavItem>
        <NavItem eventKey="wallet" onClick = {goToProfitPage}>
          <NavIcon>
            <img src={wallet} alt="wallet" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Profits</NavText>
        </NavItem>
        <NavItem eventKey="shutdown" className="shutdown" onClick = {logout}>
          <NavIcon>
            <img src={shutdown} alt="shutdown" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Log Out</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar;