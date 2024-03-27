import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/VerifyOTP.css'; 
import loginImg  from "../../assets/loginImage.jpeg"
import Navbar from '../../layouts/Navbar';
function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://yourapi.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp })
      });
      if (response.ok) {
        // Redirect to appropriate page upon successful OTP verification
        navigate('/reset-password'); // Use navigate function instead of history.push
      } else {
        console.error('OTP verification failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  return (
  <>
  <Navbar/>
  <div className="verify-otp-container">
      <div className="left-panel">
      <img src={loginImg} alt="Left Panel Image" />
      </div>
      <div className="right-panel">
        <h1>Yelospace Logo</h1>
        
        <form onSubmit={handleSubmit}>
        <h3 style={{ marginLeft: '40px' }}>Enter OTP</h3>

          <div className="otp-inputs">
            <input type="text" maxLength="1" value={otp[0] || ''} onChange={handleChange} />
            <input type="text" maxLength="1" value={otp[1] || ''} onChange={handleChange} />
            <input type="text" maxLength="1" value={otp[2] || ''} onChange={handleChange} />
            <input type="text" maxLength="1" value={otp[3] || ''} onChange={handleChange} />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
        <div className="back-to-login">
          <a href="/">Back to Login</a>
        </div>
      </div>
    </div>
  </>
  );
}

export default VerifyOTP;
