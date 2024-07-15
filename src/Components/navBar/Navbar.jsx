import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import cartLogo from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu,setMenu]=useState('Men')
  return (
    <div className='navbar'>
        <div className="navLogo">
            <img src={logo} alt="" className='navLogoImg' />
        </div>
        <ul className="nav-menu">
          
            <li onClick={()=>{setMenu("Shop")}}><Link to='/' style={{textDecoration:'none', color:'black'}}>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link to='/mens' style={{textDecoration:'none' , color:'black'}}>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link to='/womens' style={{textDecoration:'none', color:'black'}}>Women</Link>{menu==='Women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link to='/kids' style={{textDecoration:'none', color:'black'}}>Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>

        </ul>
        <div className="nav-login-cart">
           <Link to='/login'> <button>Login</button></Link>
          <Link to='cart'>  <img src={cartLogo} alt="" className='cartLogoImg' /></Link>
            <div className="nav-cart-counter">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
