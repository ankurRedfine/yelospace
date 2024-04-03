import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Login.css'; 
import loginImg from "../../assets/loginImage.jpeg"
import Navbar from '../../layouts/Navbar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setSubmitted(true); // Set submitted to true when form is submitted
      return;
    }

    try {
      const response = await axios.post('http://13.50.249.60:8080/authenticate/user', {
        email,
        password
      });

      if (response.data.status === 401) {
        console.log("Unauthorized User");
      }
      if(response.data.status === 200) {
        navigate('/dashboard');
        
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="left-panel">
          <img src={loginImg} alt="Left Panel Image" />
        </div>
        <div className="right-panel">
          <h1>Yelospace Logo</h1>
          <h3>Login to get started</h3>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            {submitted && email.trim() === "" && <span className="error">Email is required</span>}
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {submitted && password.trim() === "" && <span className="error">Password is required</span>}
            <button type="submit">Login</button>
          </form>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <div className="signup-link">
            <p>New user? <a href="/signup">Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
