import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainSignup.css";
import Navbar from "../../home_page/header_section/Navbar_Section.jsx";
import studentImage from "../../../images/login/student.png";
import teacherImage from "../../../images/login/teacher.png";

function Main_Signup() {
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === "student") {
      navigate("auth/student-signup");
    } else if (role === "teacher") {
      navigate("auth/teacher-signup");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-signup-page">
        <h3>Create a new account</h3>
        <div className="description">
          Choose an option below to signup to your account
        </div>
        <div className="signup-container">
          <div
            className="signup-box student"
            onClick={() => handleClick("student")}
          >
            <div className="signup-box-content">
              <img src={studentImage} alt="student" />
              <h2>I am a Student</h2>
              <p>Hire teachers for your learning</p>
            </div>
          </div>
          <div
            className="signup-box teacher"
            onClick={() => handleClick("teacher")}
          >
            <div className="signup-box-content">
              <img src={teacherImage} alt="teacher" />
              <h2>I am a Teacher</h2>
              <p>Find teaching jobs</p>
            </div>
          </div>
        </div>
        <div className="note">
          You can later change the account type from account settings
        </div>
      </div>
    </div>
  );
}

export default Main_Signup;
