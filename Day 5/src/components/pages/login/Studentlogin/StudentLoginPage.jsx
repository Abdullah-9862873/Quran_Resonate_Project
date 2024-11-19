import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../home_page/header_section/Navbar_Section.jsx";
import "./studentloginpage.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function StudentLoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleResetClick = () => {
    navigate("reset-password");
  };
  const handleNoAccountClick = () => {
    navigate("/signup/auth/student-signup");
  }

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <h1>Sign in to your account</h1>
        <p>Please fill the form below to log in</p>
        <form className="login-form">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
          />

          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <div className="forgot-password" onClick={handleResetClick}>
          Reset your password
        </div>
        <div className="create-account" onClick={handleNoAccountClick}>
          Don't have an account? Create one here
        </div>
      </div>
    </div>
  );
}

export default StudentLoginPage;
