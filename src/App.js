import React,{ useState, useEffect } from 'react';
import Navbar from './Components/hade/Navbar';
import { ThemeProvider } from './Components/hade/ThemeContext';
import './app.css';
import About from './Components/about/About'
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';

const App = () => {
  const darkModeLocalStorage = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    try {
      const parsedDarkMode = JSON.parse(darkModeLocalStorage);
      if (parsedDarkMode !== null) {
        setDarkMode(parsedDarkMode);
      }
    } catch (error) {
      console.log('Error parsing darkMode from localStorage:', error);
    }
  }, [darkModeLocalStorage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <ThemeProvider>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Contact />
        <Footer darkMode={darkMode} />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
