import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { CgHeart } from 'react-icons/cg';
import { FaRegComment, FaArrowDown, FaRegEye } from 'react-icons/fa';

const ResultList = ({ images, searchInputValue }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1 className="resultList-heading">{searchInputValue}</h1>
      <div className="resultList-container">
        {images.map((image) => (
          <div className="images-container" key={image.id}>
            <img
              src={image.largeImageURL}
              alt="img"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <img src={selectedImage.largeImageURL} alt="img" />
            <div className="image-details">
              <span>
                <CgHeart />
                <br />
                {selectedImage.likes}
              </span>{' '}
              <span>
                <FaRegComment />
                <br />
                {selectedImage.comments}
              </span>{' '}
              <span>
                <FaRegEye />
                <br />
                {selectedImage.views}
              </span>{' '}
              <span>
                <FaArrowDown />
                <br />
                {selectedImage.downloads}
              </span>
            </div>
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultList;
