import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>DEV@Deakin</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-links">
        <a href="#">Post</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
