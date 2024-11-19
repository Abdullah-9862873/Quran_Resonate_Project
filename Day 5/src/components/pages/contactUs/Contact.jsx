import React from 'react';
import './contact.css';
import Navbar from "../home_page/header_section/Navbar_Section.jsx";

function Contact() {
  return (
    <div>
        <Navbar/>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="type">Select Type <span className="required">*</span></label>
        <select id="type" name="type" required>
          <option value="" disabled selected>Click to select</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <label htmlFor="subject">Subject <span className="required">*</span></label>
        <select id="subject" name="subject" required>
          <option value="" disabled selected>Click to select</option>
          <option value="registration">Registration</option>
          <option value="update-account">Update my account</option>
          <option value="payments">Payments</option>
          <option value="contracts">Contracts</option>
          <option value="job-posts">Job posts</option>
          <option value="class-schedule">Class Schedule</option>
          <option value="report">Report</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="name">Name <span className="required">*</span></label>
        <input type="text" id="name" name="name" placeholder="Enter Name" required />

        <label htmlFor="email">Email <span className="required">*</span></label>
        <input type="email" id="email" name="email" placeholder="Enter Email" required />

        <label htmlFor="message">Message <span className="required">*</span></label>
        <textarea id="message" name="message" placeholder="Enter Message" rows="5" required></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
