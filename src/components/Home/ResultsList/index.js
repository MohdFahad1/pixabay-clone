import React from 'react'
import './style.css';
import { CgHeart } from "react-icons/cg";
import { FaRegComment, FaArrowDown, FaRegEye } from "react-icons/fa";

const ResultList = ({ images, searchInputValue }) => (
  <>
  <h1 className='resultList-heading'>{searchInputValue}</h1>
  <div className='resultList-container'>
    {images.map(image => (
      <div className='images-container'>
        <img key={image.id} src={image.largeImageURL} alt="img" />
        <div className='images-icons'>
        <span><CgHeart />{image.likes}</span> <span><FaRegComment />{image.comments}</span> <span><FaRegEye />{image.views}</span> <span><FaArrowDown />{image.downloads}</span>
        </div>
        {/* <div className='images-likes'>
          <span>{image.likes}</span> <span>{image.comments}</span> <span>{image.views}</span> <span>{image.downloads}</span>
        </div> */}
      </div>
    ))}
  </div>
  </>
);

export default ResultList
