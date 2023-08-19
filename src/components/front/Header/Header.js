import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                    TECSTASY
                </Link>
            </h1>
        </div>

        <div className='header-links'>
            <ul>
               <li>
                <Link to="/home">Home</Link>
               </li> 
            </ul>


            <ul>
               <li>
                <Link to="/cart" className='cart'>
                <i class="fa-solid fa-cart-shopping"></i>
                </Link>
               </li> 
            </ul>

        </div>
    </div>
  )
}

export default Header