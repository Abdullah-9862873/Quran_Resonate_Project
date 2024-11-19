import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./components/pages/home_page/Home.jsx";
import FindTeacher from "./components/pages/findTeachers/FindTeacher.jsx";
import TeacherProfile from "./components/pages/findTeachers/teacher_profile/TeacherProfile.jsx";
import FindJobs from "./components/pages/findJobs/Jobs_Section/Jobs_Section.jsx";
import Contact from "./components/pages/contactUs/Contact.jsx";
import Faq from "./components/pages/faqs/FAQ.jsx";
import Login from "./components/pages/login/Login.jsx";
import StudentLoginPage from "./components/pages/login/Studentlogin/StudentLoginPage.jsx";
import TeacherLoginPage from "./components/pages/login/Teacherlogin/TeacherLoginPage.jsx";
import ResetPassword from "./components/pages/login/ResetPassword/Reset.jsx";
import Signup from "./components/pages/signup/main/Main_Signup.jsx";
import StudentSignupPage from "./components/pages/signup/student/StudentSignup.jsx";
import TeacherSignupPage from "./components/pages/signup/teacher/TeacherSignup.jsx";

// After logging in as Student
import AfterLoginHome from "./components/pages/AfterLogin/student/Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-teachers" element={<FindTeacher />} />
        <Route path="/find-teachers/:id" element={<TeacherProfile />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/auth/student-login" element={<StudentLoginPage />} />
        <Route path="/login/auth/teacher-login" element={<TeacherLoginPage />} />
        <Route path="/login/auth/student-login/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/auth/student-signup" element={<StudentSignupPage />} />
        <Route path="/signup/auth/teacher-signup" element={<TeacherSignupPage />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
