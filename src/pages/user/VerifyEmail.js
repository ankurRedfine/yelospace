import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/VerifyOTP.css'; 
import loginImg  from "../../assets/loginImage.jpeg"
import Navbar from '../../layouts/Navbar';
function VerifyEmail() {
  const otpRef = useRef([])
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    var strOtp = "";
    otp.map((val)=>{ strOtp += val.toString()});
    console.log(otp,"OTP", strOtp);
    try {
      let body = {...formData};

      console.log(formData)
      body.otp = strOtp;

      const response = await fetch('http://13.50.249.60:8080/sign-up/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (response.status === 200) {
        // Redirect to appropriate page upon successful OTP verification
        navigate('/'); 
      } else {
        console.error('OTP verification failed');
      }
      
    } catch (error) {
      console.error('Error occurred:', error);
    }
    
  };


  const enterOtp = (e, otpNumber) => {
    const no = e.target.value;
    if (!no || no?.length <= 1) {
      const currentOtp = [...otp];
      currentOtp[otpNumber] = no;
      setOtp(currentOtp);
      if (no && otpRef.current[otpNumber + 1]) {
        otpRef.current[otpNumber + 1].focus();
      }
      if (!no && otpRef.current[otpNumber - 1]) {
        otpRef.current[otpNumber - 1].focus();
      }
    }
    if (no?.length === 4 && otpNumber === 0 && !isNaN(no)) {
      setOtp(no.toString().split('').map(Number));
      otpRef.current[3].focus();
    }
  };

  useEffect(() => {
    
   const data = localStorage.getItem("formdata");

   setFormData(JSON.parse(data))
  }, []);
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
        <h3 style={{ marginLeft: '10px' }}>A Verification OTP has been sent to your registered Email ID.</h3>

          <div className="otp-inputs">
          <input ref={el => otpRef.current[0] = el} value={otp[0]} type='number' onInput={(e) => enterOtp(e, 0)} />
          <input ref={el => otpRef.current[1] = el} value={otp[1]} type='number' onInput={(e) => enterOtp(e, 1)} />
          <input ref={el => otpRef.current[2] = el} value={otp[2]} type='number' onInput={(e) => enterOtp(e, 2)} />
          <input ref={el => otpRef.current[3] = el} value={otp[3]} type='number' onInput={(e) => enterOtp(e, 3)} />
          </div>
          <button type="submit">Verify Email</button>
        </form>
        <div className="back-to-login">
          <a href="/">Back to Login</a>
        </div>
      </div>
    </div>
   </>
  );
}

export default VerifyEmail;
