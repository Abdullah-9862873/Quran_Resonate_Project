import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../home_page/header_section/Navbar_Section.jsx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./teacherSignup.css";

function TeacherSignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePresentUserClick = ()=>{
    navigate("/login/auth/teacher-login");
  }

  return (
    <div>
      <Navbar />
      <div className="teacher-signup-page">
        <h1>Create a new teacher account</h1>
        <p>Please fill the form below to create an account</p>
        <form className="teacherSignup-form">
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

export default TeacherSignupPage;
