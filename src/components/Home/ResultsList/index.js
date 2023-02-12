import React from 'react'
import './style.css';

const ResultList = ({ images }) => (
    <div className='resultList-container'>
      {images.map(image => {
        <img key={image.id} src={image.userImageURL} alt="img" />
        {/* <h1>{image.id}, </h1> */}
      })}
    </div>)

export default ResultList