import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "../home_page/header_section/Navbar_Section.jsx";
import studentImage from "../../images/login/student.png";
import teacherImage from "../../images/login/teacher.png";

function Login() {
  const navigate = useNavigate(); 

  const handleClick = (role) => {
    if (role === "student") {
      navigate("auth/student-login");
    } else if (role === "teacher") {
      navigate("auth/teacher-login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <h3>Select type</h3>
        <div className="description">
          Choose an option below to login to your account
        </div>
        <div className="login-container">
          <div
            className="login-box student"
            onClick={() => handleClick("student")} 
          >
            <div className="login-box-content">
              <img src={studentImage} alt="student" />
              <h2>I am a Student</h2>
              <p>Hire teachers for your learning</p>
            </div>
          </div>
          <div
            className="login-box teacher"
            onClick={() => handleClick("teacher")}
          >
            <div className="login-box-content">
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

export default Login;
