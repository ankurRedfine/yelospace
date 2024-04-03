import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ForgotPassword.css';
import loginImg from '../../assets/loginImage.jpeg';
import Navbar from '../../layouts/Navbar';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://13.50.249.60:8080/send-otp/{email}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.status === 200) {
        navigate('/verify-otp');
      } else {
        const data = await response.json();
        if (data.status === 404) {
          console.error('Email does not exist');
          // Handle the case where email does not exist (e.g., show an error message)
        } else {
          console.error('Failed to send reset link');
          // Handle other error cases
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="forgot-password-container">
        <div className="left-panel">
          <img src={loginImg} alt="Left Panel Image" />
        </div>
        <div className="right-panel">
          <h1>Yelospace Logo</h1>
          <div className="forget-password-heading">
            <h2>Forget Password</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Enter your registered Email</label>
              <input type="email" id="email" placeholder="Email" value={email} onChange={handleChange} />
              <label htmlFor="email">An OTP will be sent to your registered email</label>
            </div>
            <button type="submit">Send OTP</button>
          </form>
          <div className="back-to-login">
            <a href="/">Back to Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
