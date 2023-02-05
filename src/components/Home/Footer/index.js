import React from 'react';
import './style.css';
import { FaPinterest, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer>
    <div className='footer-content'>
      <div>
        <div className='footer-heading'>
          <h1>pixabay</h1>
          <p>Over 3 million+ high quality stock images, videos and music shared by our talented community.</p>
        </div>
        <div className='footer-icons'>
          <FaInstagram className='icon' />
          <FaPinterest className='icon' />
          <FaTwitter className='icon' />
          <FaFacebook className='icon'/>
        </div>
      </div>
      <div className='footer-links'>
        <div>
          <span>Discover</span>
          <div className='links'>
            Editor's Choice<br />
            Curated Collections<br />
            Popular Images<br />
            Popular Videos<br />
            Popular Music<br />
            Popular Searches<br />
          </div>
        </div>
        <div>
          <span>Community</span>
          <div className='links'>
            Blog<br />
            Forum<br />
            Creators<br />
            Cameras<br />
          </div>
        </div>
        <div>
          <span>About</span>
          <div className='links'>
            About Us<br />
            FAQ<br />
            License<br />
            Terms of Service<br />
            Privacy Policy<br />
            Cookies Policy<br />
            API<br />
          </div>
        </div>
      </div>
      </div>
      <div className='copyright'>
        <p>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
      </div>
    </footer>
      </>
  )
}

export default Footer