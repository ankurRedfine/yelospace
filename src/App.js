import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import ForgotPassword from './pages/ForgetPassword';
import VerifyOTP from './pages/verifyOTP';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from "./pages/VerifyEmail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp/:token" element={<VerifyOTP />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Additional routes can be defined here */}
      </Routes>
    </Router>
  );
}

export default App;
