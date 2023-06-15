import React, {   useState } from 'react';
// import { ThemeContext } from './ThemeContext';
// import Switch from '@mui/material/Switch';
import {MdDarkMode} from 'react-icons/md'
import './navbar.css';
import re from '../../assets/re.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleItemClick = () => {
    setShowMenu(false);
  };

  const handleCombinedClick = () => {
    toggleDarkMode();
    handleItemClick();
    
  };


  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo">
        <img src={re} alt="Logo" />
      </div>

      <div className={`menu ${showMenu ? 'show' : ''}`}>
        <a href="#home" onClick={handleItemClick}>Home</a>
        <a href="#about" onClick={handleItemClick}>About</a>
        <a href="#contact" onClick={handleItemClick}>Contact</a>
        <a href="#Collection" onClick={handleItemClick}>Collection</a>
        <a href="#New" onClick={handleItemClick}>New</a>
        <a href="#Sales" onClick={handleItemClick}>Sales</a>
        <div className="switch-icon">
          <button className="dark-mode-btn" onClick={handleCombinedClick}><MdDarkMode />
            {/* {darkMode ? 'Light Mode' : 'Dark Mode'} */}
          </button>
        </div>
      </div>
      
      <button className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </button>
    </nav>
  );
};

export default Navbar;