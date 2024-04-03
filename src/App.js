import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/user/Login';
import SignUp from './pages/user/Signup'
import ForgotPassword from './pages/user/ForgetPassword';
import VerifyOTP from './pages/user/verifyOTP';
import ResetPassword from './pages/user/ResetPassword';
import VerifyEmail from "./pages/user/VerifyEmail"
import ProviderLogin from './pages/provider/ProviderLogin';
import ProviderSignUp from './pages/provider/ProviderSignUp';
import ProviderForgetPassword from './pages/provider/ProviderForgetPassword'
import ProviderVerifyOTP from './pages/provider/ProviderVerifyOTP';
import ProviderResetPassword from './pages/provider/ProviderResetPassword';
import ProviderVerifyEmail from './pages/provider/ProviderVerifyEmail';
import AboutUs from './pages/user/AboutUs';
import FAQPage from './pages/user/FAQpage';

import UserProfile from "./pages/user/userProfile"
import ContactUs from './pages/user/ContactUs';
import ProviderProfile from './pages/provider/ProviderProfile';
import EditProfile from './pages/user/EditProfile';
import Dashboard from './pages/user/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/provider-login" element={<ProviderLogin/>} />
        <Route path="/provider-signup" element={<ProviderSignUp/>} />
        <Route path="/provider-forget-password" element={<ProviderForgetPassword/>} />
        <Route path="/provider-verify-otp" element={<ProviderVerifyOTP/>} />
        <Route path="/provider-verify-email" element={<ProviderVerifyEmail/>} />
        <Route path="/provider-reset-password" element={<ProviderResetPassword/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp/" element={<VerifyOTP />} />
        <Route path="/verify-email/" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/provider-profile" element={<ProviderProfile />} />
        <Route path="/edit" element={<EditProfile />} />
        {/* Additional routes can be defined here */}
      </Routes>
    </Router>
  );
}

export default App;
