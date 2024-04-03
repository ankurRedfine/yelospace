import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import "../../styles/EditProfile.css"; // Import your CSS file for styling
import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';
import loginImg from "../../assets/loginImage.jpeg"

const EditProfile = () => {
  return (
    <>
      <Navbar/>
      <div className="edit-profile-container">
        <div className="edit-profile-left">
        <img src={loginImg} alt="Left Panel Image" />
        </div>
        <div className="edit-profile-right">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/150" alt="Avatar" />
          </div>
          <h3>Edit My Profile</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Mobile" />
            </div>
            <button className='btn' type="submit">Update</button>
          </form>
        </div>
      </div>
 
    </>
  );
};

export default EditProfile;
