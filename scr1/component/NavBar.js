import React from 'react';
import "../style/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="logo">Pizza Pie</Link>

      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </header>
  );
};

export default NavBar;
