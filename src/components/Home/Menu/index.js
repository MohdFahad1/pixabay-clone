import React from 'react';
import './style.css';
import { CgSearch } from "react-icons/cg";

const Menu = () => {
  return (
    <div className='main-container'>
      <div className='container-content'>
        <div className='container-text'>
          <h1>Stunning free images & royalty free stock</h1>
          <p>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>
        </div>

        {/* --------------NORMAL BUTTON-------------- */}
        <div className='search-container'>
          <div className='searchbar-content'>
            <input className='search-bar'
              type="search"
              placeholder="Search for all images on pixabay" autoComplete='off'
            />
            <button className='search-btn'>
              <CgSearch />
            </button>
          </div>
        </div>


        {/* -------------ANIMATED BUTTON------------  */}

        {/* <div className="search-box">
          <input type="text" placeholder="Search anything" className="search-input" />
            <a href="#" class="search-btn">
            <CgSearch />
            </a>
        </div> */}




        <div className='popular-searches'>
          <span>Popular: </span>
        </div>
      </div>
    </div>
  )
}

export default Menu