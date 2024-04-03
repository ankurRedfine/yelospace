import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
       <footer>
      <div className="container">
        <div className="column">
          <h2>Yellow Space Logo</h2>
          <p>A space for creative minds</p>
        </div>
        <div className="column">
          <h2>Address</h2>
          <p>123 Main Street<br />City, State ZIP<br />Country</p>
        </div>
        <div className="column">
          <h2>Company</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Community Board</a></li>
            <li><a href="#">Be Our Partner</a></li>
          </ul>
        </div>
        <div className="column">
          <h2>Connect with Us</h2>
          <ul>
            <li><a href="#">yellowspacework@gmail.com</a></li>
            <li><a href="#">@yellowspacework</a></li>
            <li><a href="#">www.yellowspace.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-line"></div>
      <p
        style={{
          textAlign: 'left',
          marginTop: '10px',
          marginLeft: '20px',
          color: '#fff',
        }}
      >
        Copyright © 2024 Your Company
      </p>
    </footer>
    </div>
  );
}

export default Footer;
