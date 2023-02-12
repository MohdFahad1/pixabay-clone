import React from 'react'
import './style.css'
import { FaHome } from "react-icons/fa";
const Header = ({handleHomeClick}) => (
    <header>
      <div className='header-logo'>
        <h1 onClick={handleHomeClick}> pixabay </h1>
      </div>
      <div className='header-content'>
        <button className='upload-btn'><FaHome className='upload-icon' onClick={handleHomeClick}/></button>
      </div>
    </header>
  )


export default Header