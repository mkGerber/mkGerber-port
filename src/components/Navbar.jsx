import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <nav>
      <h1>Michael Gerber</h1>
      <div className="navOptions">
        <h4><Link to="/">About Me</Link></h4>
        <h4><Link to="/resume">Resume</Link></h4>
        <h4><Link to="/Projects">Projects</Link></h4>
        <h4><Link to="/blogs">Blogs</Link></h4>
        <h4 className="contact" onClick={toggleDropdown}>
          Contact
          {showDropdown && (
            <div className="dropdownMenu">
              <a href="https://www.linkedin.com/in/michael-k-gerber/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/mkgerber" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:michaelgerber2004@gmail.com">Email</a>
            </div>
          )}
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;