import React from 'react';
import './about.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">

      <h1>About</h1> <br></br>

      <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        
        <p>Paragraph 1</p>
      </div>
      <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        
        <p>Paragraph 2</p>
      </div>
      <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        
        <p>Paragraph 3</p>
      </div>
    </div>
  );
};

const handleMouseOver = (event) => {
  event.target.style.transform = 'scale(1.1)';
};

const handleMouseOut = (event) => {
  event.target.style.transform = 'scale(1)';
};

export default About;
