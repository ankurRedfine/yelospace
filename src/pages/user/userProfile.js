import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Profile.css"
import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';
const MyProfile = () => {
  return (
  <>
  <Navbar/>
    <div className="profile-container">
      <div className="profile-header">
        <h3>My Profile</h3>
        <a href="/edit"> 
    <FontAwesomeIcon icon={faEdit} className="edit-icon" />
  </a>
      </div>
      <div className="profile-details">
        <h3>User Details</h3>
        <div className="user-info">
          <div className="user-avatar">
            <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="User Avatar" />
          </div>
          <div className="user-text">
              <p><strong>Name:</strong>  John Doe</p>
              <p><strong>Email:</strong>  johndoe@example.com</p>
              <p><strong>Mobile:</strong> +1234567890</p>
              <p><strong>Password:</strong>  *********</p>
            </div>
        </div>
      </div>
    </div>
  
    <Footer/>
  </>
  );
};

export default MyProfile;
