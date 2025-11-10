import React from 'react';
import './navbar1.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">RentCar</h2>
      <ul className="nav-links">
        <li><a href="#welcome">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#cars">Cars</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
