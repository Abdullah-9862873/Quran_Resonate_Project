import React, { useState } from "react";
import Navbar from "../../home_page/header_section/Navbar_Section.jsx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./studentSignup.css";
import { useNavigate } from "react-router-dom";

function StudentSignup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePresentUserClick = ()=>{
    navigate("/login/auth/student-login");
  }

  return (
    <div>
      <Navbar />
      <div className="student-signup-page">
        <h1>Create a new student account</h1>
        <p>Please fill the form below to create an account</p>
        <form className="studentSignup-form">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />

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
            Create Account
          </button>
        </form>
        <div className="query" onClick={handlePresentUserClick}>Already have an account? Sign in here</div>
      </div>
    </div>
  );
}

export default StudentSignup;
