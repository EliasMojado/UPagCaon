import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Dashboard/Dashboard.css';
import Sidebar from './Sidebar';
import OrderList from './OrderList';
import employee from '../../../Assets/NavIcons/employee.svg';
import wallet from '../../../Assets/NavIcons/wallet.svg';
import cart from '../../../Assets/NavIcons/cart.svg';
import viands from '../../../Assets/NavIcons/viand.svg';
import drinks from '../../../Assets/NavIcons/drink.svg';
import snacks from '../../../Assets/NavIcons/snack.svg';
import schoolsupply from '../../../Assets/NavIcons/schoolsupply.svg';
import { getOrders } from '../Orders/OrderFunction';
import { getEarned } from '../Profits/ProfitFunction';


import { apiUrl } from '../../../config';
import withAdminAuthentication from '../requireAdminAuthentication';

function Dashboard() {
  const navigate = useNavigate();

  const goToEmpPage = () => {
    navigate('/admin/employee', { replace: true});
  }

  const goToProfPage = () => {
    navigate('admin/profits', { replace: true});
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

  // const [authenticated, setAuthenticated] = useState(false);
  const [adminCount, setAdminCount ] = useState(0);
  const [orders, setOrders] = useState([]);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Make an API call to fetch the count of admins
    fetch(apiUrl + '/admin/count')
      .then((response) => response.json())
      .then((data) => {
        setAdminCount(data.adminCount);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      getEarnings();
      fetchOrders();
  }, []);

  const getEarnings = async () => {
    try{
      const earned = await getEarned();
      setEarnings(earned);
    }catch(error){
      console.error('Error retrieving earnings:', error);
    }
  }

  const fetchOrders = async () => {
    try {
      const orders = await getOrders();
      setOrders(orders);
    } catch (error) {
      console.error('Error retrieving orders:', error);
      // Handle the error case appropriately
    }
  };

  return (
    <div className="dashboard">
      <header className='header-container'> 
        <span className='dash'>DASHBOARD</span>
        <Sidebar/>
      </header>
      <div className="container-wrapper">
        <div className="container">
          <div className="box" onClick={goToEmpPage}>
            <span className='box-content'>Total Employees</span>
            <div className='employee-container'>
              <img src={employee} alt='employee' className='employee'/>
              <span className='number'>{adminCount}</span>
            </div>
          </div>
          <div className="box" onClick={goToProfPage}>
            <span className='box-content'>Total Profit</span>
            <div className='profit-container'>
              <img src={wallet} alt='wallet' className='wallet'/>
              <span className="number">{earnings?.total ?? 0}</span>
            </div>
          </div>
          <div className="box">
            <span className='box-content'>Orders in Queue</span>
            <div className='cart-container'>
              <img src={cart} alt='cart' className='cart'/>
              <span className='number'>{orders.length}</span>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="box2" onClick={goToViandPage}>
            <span className='box-content2'>Viands</span>
            <div className='viands-container'>
              <img src={viands} alt='viands' className='viands'/>
            </div>
          </div>
          <div className="box2" onClick={goToDrinkPage}>
            <span className='box-content2'>Drinks</span>
            <div className='drinks-container'>
              <img src={drinks} alt='drinks' className='drinks'/>
            </div>
          </div>
          <div className="box2" onClick={goToSnackPage}>
            <span className='box-content2'>Snacks</span>
            <div className='snacks-container'>
              <img src={snacks} alt='snacks' className='snacks'/>
            </div>
          </div>
          <div className="box2" onClick={goToOtherPage}>
            <span className='box-content2'>Others</span>
            <div className='schoolsupply-container'>
              <img src={schoolsupply} alt='schoolsupply' className='schoolsupply'/>
            </div>
          </div>
        </div>
      </div>
      <OrderList orders={orders} />
    </div>
  );
}

export default withAdminAuthentication(Dashboard);
