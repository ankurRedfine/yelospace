import React, { useState } from 'react'; // Importing useState
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">YourLogo</div>
      <ul className="nav-links">
        <li><a href="/faq">Legal Support</a></li>
        <li><a href="#">Community Board</a></li>
        <li><a href="/provider-login">Be Our Partner</a></li>
        <li className="hamburger-menu" onClick={toggleMenu}>
          <div className="material-symbols-outlined">menu</div>
          {isOpen && (
            <div className="menu-options">
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
