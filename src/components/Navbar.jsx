import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const { data:cartProducts } = useSelector((state) => state.cart);
  const navigation = useNavigate();

  const logout = ()=>{
     localStorage.removeItem('token')
     navigation('/')
  }

  return (
    <div className='navbar'>
      <span className='logo'>ONLINE STORE</span>
      <div>
        <NavLink exact="true" to='/home' className='navLink' activeclassname='active'>Home</NavLink>
        <NavLink to='/myOrder' className='navLink' activeclassname='active'>My Orders</NavLink>
        <NavLink to='/wishlist' className='navLink' activeclassname='active'>WhishList</NavLink>
        <NavLink to='/cart' className='navLink cartCount' activeclassname='active'>Cart</NavLink>
        <button onClick={logout} className='logout'>LOGOUT</button>
      </div>
    </div>
  );
}

export default Navbar;
