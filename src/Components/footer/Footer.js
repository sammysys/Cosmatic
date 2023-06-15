import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

import './footer.css';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="container">
      <div className="social-icons">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
          <a href="https://pinterest.com">
            <FaPinterest />
          </a>
        </div>
        <p>&copy; {currentYear}  All rights reserved.</p>
        <p>By Hade</p>
      </div>
      
    </footer>
  );
};

export default Footer;
