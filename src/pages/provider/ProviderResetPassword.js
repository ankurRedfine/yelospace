import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ResetPassword.css';
import loginImg from "../../assets/loginImage.jpeg";
import Navbar from '../../layouts/Navbar';

function ProviderResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://13.50.249.60:8080/reset-pass/provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword, confirmPassword })
      });
      if (response.ok) {
        navigate('/provider-login');
      } else {
        console.error('Failed to reset password');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
   <>
   <Navbar/>
    <div className="reset-password-container">
      <div className="left-panel">
        <img src={loginImg} alt="Left Panel Image" />
      </div>
      <div className="right-panel">
        <h1>Yelospace Logo</h1>
        <div className="reset-password-heading">
          <h2>Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
         
            <input type="password" id="newPassword" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div className="input-group">
           
            <input type="password" id="confirmPassword" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        <div className="back-to-login">
          <a href="/provider-login">Back to Login</a>
        </div>
      </div>
    </div>
   </>
    );
}

export default ProviderResetPassword;
