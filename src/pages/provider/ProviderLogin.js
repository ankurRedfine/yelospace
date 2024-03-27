import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css"

import loginImg  from "../../assets/loginImage.jpeg"
import Navbar from '../../layouts/Navbar';
import axios from 'axios';

function ProviderLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("form data>>>>>",formData)
      const response = await fetch('http://13.50.249.60:8080/authenticate/provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/dashboard'); 
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="left-panel">
      <img src={loginImg} alt="Left Panel Image" />

      </div>
      <div className="right-panel">
        <h1>Yelospace Logo</h1>
        <h3>Login as Provider</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <a href="/provider-forget-password">Forgot password?</a>
        </div>
        <div className="signup-link">
          <p>New user? <a href="/provider-signup">Sign up</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProviderLogin;
