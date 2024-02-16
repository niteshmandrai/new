import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { Link } from 'react-router-dom';

import './Navbar.scss'


function Navbar() {
  return (
   <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <div className="item">
          {/* <img src="" alt="IND" /> */}
          {/* <FaAngleDown/> */}
        </div>
        <div className="item">
          <span>IND</span>
          <FaAngleDown/>
        </div>

        <div className="item">
          <Link className='link' to='/products/1'>MEN</Link>
        </div>

        <div className="item">
          <Link className='link' to='/products/2'>WOMEN</Link>
        </div>

        <div className="item">
          <Link className='link' to='/products/3'>childern</Link>
        </div>
        
      </div>
      <div className="center">
        <Link className='link' to='/'>My store</Link>
      </div>
      <div className="right">
        <div className="item">
          <Link className='link' to='/'>Homepage</Link>
        </div>

        <div className="item">
          <Link className='link' to='/about'>About</Link>
        </div>

        <div className="item">
          <Link className='link' to='/contact'>Contact</Link>
        </div>

        <div className="item">
          <Link className='link' to='/stores'>Stores</Link>
        </div>

        <div className="icons">
          <IoIosSearch/>
          <CgProfile/>
          <GrFavorite/>
          <div className="carticon">
          <FaCartShopping/>
          <span>0</span>
          </div>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar