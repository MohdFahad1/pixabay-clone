import React from 'react'
import './style.css'
import { CgSoftwareUpload } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <h1> pixabay </h1>
      </div>
      <div className='header-content'>
        <button className='login-btn'> Log in </button>
        <button className='join-btn'> join </button>
        <button className='upload-btn'><CgSoftwareUpload className='upload-icon'/> Upload </button>
      </div>
    </header>
  )
}

export default Header