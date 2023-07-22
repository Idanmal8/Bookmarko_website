import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact-us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
