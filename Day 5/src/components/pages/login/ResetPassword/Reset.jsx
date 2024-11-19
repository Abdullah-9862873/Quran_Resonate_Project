import React from "react";
import Navbar from "../../home_page/header_section/Navbar_Section.jsx";
import "./reset.css";

function Reset() {
  return (
    <div>
      <Navbar />
      <div className="reset-page">
        <h1 className="reset-heading">Reset Your Password</h1>
        <p className="reset-description">
          Please enter your registered email below to reset your password.
        </p>
        <form className="reset-form">
          <label htmlFor="email" className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />
          <button type="submit" className="btn-reset">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
