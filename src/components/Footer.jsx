import React from 'react';
import './Footer.css';

function Footer() {

    return (
    <footer>
        <div className="footerContent">
          <p>&copy; 2024 Michael Gerber. All rights reserved.</p>
          <div className="socialLinks">
            <a href="https://github.com/mkGerber" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:michaelgerber2004@gmail.com" target="_blank">michaelgerber2004@gmail.com</a>
            <a href="https://linkedin.com/in/michael-k-gerber" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;