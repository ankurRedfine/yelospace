import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">YourLogo</div>
      <ul className="nav-links">
        <li><a href="#">Legal Support</a></li>
        <li><a href="#">Community Board</a></li>
        <li><a href="#">Be Our Partner</a></li>
        <li className="hamburger-menu">
          <div className="material-symbols-outlined">menu</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
