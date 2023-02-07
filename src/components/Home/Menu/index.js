import React from 'react';
import './style.css';
import { CgSearch } from "react-icons/cg";

const Menu = ({handleFormSubmit, handleInputChange, searchInputValue}) => {
  return (
    <div className='main-container'>
      <div className='container-content'>
        <div className='container-text'>
          <h1>Stunning free images & royalty free stock</h1>
          <p>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>
        </div>
        <div className='search-container'>
          <form className='searchbar-content' onSubmit={handleFormSubmit
          }>
            <input className='search-bar'
            value={searchInputValue}
              type="search"
              placeholder="Search for all images on pixabay" autoComplete='off'
              onChange={handleInputChange}
            />
            <button className='search-btn'>
              <CgSearch />
            </button>
            </form>
        </div>



        <div className='popular-searches'>
          <span>Popular: </span>
        </div>
      </div>
    </div>
  )
}

export default Menu