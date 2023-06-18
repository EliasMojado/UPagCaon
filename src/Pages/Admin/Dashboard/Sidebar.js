import { useNavigate } from 'react-router-dom';
import '../Dashboard/Dashboard.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
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
  
  const logout = () =>{
    window.location.href = '/admin';
    localStorage.removeItem('user');
  }

  const navigate = useNavigate();

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

  return (
    <SideNav
      style={{ backgroundColor: '#481E1E' }}
      onSelect={(selected) => {}}
    >
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div></div>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
    
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

        <NavItem eventKey="schoolsupply">
          <NavIcon>
            <img src={schoolsupply} alt="schoolsupply" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">School Supplies</NavText>
        </NavItem>

        <NavItem eventKey="cart">
          <NavIcon>
            <img src={cart} alt="cart" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Orders</NavText>
        </NavItem>

        <NavItem eventKey="wallet">
          <NavIcon>
            <img src={wallet} alt="wallet" className="nav-icon" />
          </NavIcon>
          <NavText className="navtext">Profit</NavText>
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