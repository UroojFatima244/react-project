import React, { useState } from 'react';
import './naavbaar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
};

export default Navbar;
