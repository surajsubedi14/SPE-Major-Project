import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

import use from '../Assets/user.png'

import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const [menu,setmenu]=useState("home");
    const {getTotalCartitems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" height="50" width="50"/>
            <p  onClick={()=>{setmenu("home")}}>PrestigePicks</p>
            

        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}}  to ='/'>Shop</Link >{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            


        </ul>
        <div className='nav-login-cart'>
           {/* <Link to ='/login'> <button>Login</button></Link> */}
           <Link to ='/login'><img src={use} alt="" width="50%" height="50%"/></Link> 
           <Link to ='/cart'><img src={cart_icon} alt=""/></Link> 
            <div className="nav-cart-count">{getTotalCartitems()}</div>
            
        </div>



    </div>
  )
}

export default Navbar