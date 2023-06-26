import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import schoolsupply from '../../../Assets/NavIcons/schoolsupply.svg';
import shutdown from '../../../Assets/NavIcons/shutdown.svg';
import viand from '../../../Assets/NavIcons/viand.svg';
import drink from '../../../Assets/NavIcons/drink.svg';
import snack from '../../../Assets/NavIcons/snack.svg';
import home from '../../../Assets/NavIcons/home.svg';
import user from '../../../Assets/NavIcons/user.svg';
import cart from '../../../Assets/NavIcons/cart.svg';
import logo from '../../../Assets/logowhite.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Home/Home.css';

function Sidebar() {  
  const navigate = useNavigate();
  const location = useLocation();
  const [selected,setSelected] = useState('home');
  const logout = () =>{
    window.location.href = '/';
    localStorage.removeItem('user');
  }

  useEffect(() => {
    switch (true)  {
      case location.pathname.includes('/home'):
        setSelected('home');
        break;
      case location.pathname.includes('/viand'):
        setSelected('viand');
        break;
      case location.pathname.includes('/drink'):
        setSelected('drink');
        break;
      case location.pathname.includes('/snack'):
        setSelected('snack');
        break;
      case location.pathname.includes('/other'):
        setSelected('schoolsupply');
        break;
      case location.pathname.includes('/cart'):
        setSelected('cart');
        break;
      case location.pathname.includes('/track'):
          setSelected('cart');
          break;
      case location.pathname.includes('/profile'):
        setSelected('profile');
        break;
      default:
        setSelected('home');
        break;
    }
  }, [location]);

  const goToHomePage = () => {
    navigate('/home', { replace: true });
  }

  const goToViand = () => {
    navigate('/viand', { replace: true });
  }

  const goToDrink = () => {
    navigate('/drink', { replace: true });
  }

  const gotToSnack = () => {
    navigate('/snack', { replace: true });
  }

  const goToOther = () => {
    navigate('/other', { replace: true });
  }

  const goToCart = () => {
    navigate('/cart', { replace: true });
  }

  const goToProfile = () => {
    navigate('/profile', { replace: true });
  }

  return (
    <SideNav
      style={{ backgroundColor: '#520000' }}
      onSelect={() => {}}
    >
      <img src={logo} alt="logo" className="logo" onClick = {goToHomePage} />
      <div></div>
      <SideNav.Toggle />
      <SideNav.Nav selected= {selected}>    
        <NavItem eventKey="home" onClick = {goToHomePage}>
          <NavIcon>
            <img src={home} alt="home" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Home</NavText>
        </NavItem>

        <NavItem eventKey="viand" onClick = {goToViand}>
          <NavIcon>
            <img src={viand} alt="viand" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Viands</NavText>
        </NavItem>

        <NavItem eventKey="drink" onClick = {goToDrink}>
          <NavIcon>
            <img src={drink} alt="drink" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Beverages</NavText>
        </NavItem>        

        <NavItem eventKey="snack" onClick = {gotToSnack}>
          <NavIcon>
            <img src={snack} alt="snack" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Snacks</NavText>
        </NavItem>

        <NavItem eventKey="schoolsupply" onClick = {goToOther}>
          <NavIcon>
            <img src={schoolsupply} alt="schoolsupply" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Others</NavText>
        </NavItem>

        <NavItem eventKey="cart" onClick = {goToCart}>
          <NavIcon>
            <img src={cart} alt="cart" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Cart</NavText>
        </NavItem>

        <NavItem eventKey="profile" onClick = {goToProfile}>
          <NavIcon>
            <img src={user} alt="user" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Profile</NavText>
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