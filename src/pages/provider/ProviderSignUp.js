import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/SignUp.css";
import loginImg from "../../assets/loginImage.jpeg";
import Navbar from "../../layouts/Navbar";
function ProviderSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
    licesenceNo : "",
    provider: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://13.50.249.60:8080/sign-up/provider",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        navigate("/provider-login");
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="left-panel">
          <img src={loginImg} alt="Left Panel Image" />
        </div>
        <div className="right">
          <h1>Yelospace Logo</h1>
          <h3>Sign Up as Provider</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
           
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div> <div className="input-group">
              <input
                type="text"
                id="licesenceNo"
                name="licesenceNo"
                placeholder="Licesence No"
                value={formData.licesenceNo}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>

          
            
            <div className="input-group">
              <input
                type="text"
                id="provider"
                name="provider"
                placeholder="Provider Type"
                value={formData.provider }
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address }
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="checkbox-group">
              <span>
                {" "}
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  checked={formData.termsAndConditions}
                  onChange={handleChange}
                />
              </span>
              <span>
                <p> I accept the terms and conditions and privacy policy</p>
              </span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProviderSignUp;
