import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "../index.css"
const Navbar = () => {
    const state = useSelector((data)=>data.cart);
  return (
    <div className='outer'>
        <span className='logo'>Redux Store</span>
        <div>

        <Link to="/" className='navLink'>Home</Link>
        <Link to="/cart" className='navLink'>Cart</Link>
        <span className='cartCount'>Cart items : {state.length}</span>
        </div>

    </div>
  )
}

export default Navbar