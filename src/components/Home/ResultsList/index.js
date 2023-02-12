import React from 'react'
import './style.css';

const ResultList = ({ images }) => (
  <div className='resultList-container'>
    {images.map(image => (
      <div className='images-container'>
      <img key={image.id} src={image.largeImageURL} alt="img" />
      {/* <div>{image.comments} {image.likes} {image.downloads} {image.views}</div> */}
      </div>
    ))}
  </div>
);

export default ResultList