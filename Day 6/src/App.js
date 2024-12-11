import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext.js"; 

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
import MyQuery from "./components/pages/queries/MyQuery.jsx";

// After logging in as Student
import StudentHome from "./components/pages/AfterLogin/student/home//Home.jsx";
import PostAJobRequirement from "./components/pages/AfterLogin/student/PostAJobReqButton/PostJobReqButton.jsx";

// After logging in as Teacher
import TeacherHome from "./components/pages/AfterLogin/teacher/home/Home.jsx";

const App = () => {
  const { isLoggedIn, role } = useAuth();

  const renderHomePage = () => {
    if (!isLoggedIn) return <Home />;
    if (role === "student") return <StudentHome />;
    if (role === "teacher") return <TeacherHome />;
    return <Navigate to="/" replace />;
  };

  return (
    <UserProvider>  {/* Wrap the entire app with UserProvider */}
      <Router>
        <Routes>
          {/* Home page, conditional based on logged-in state and user role */}
          <Route path="/" element={renderHomePage()} />

          {/* Teacher-related routes */}
          {/* Only show FindTeacher route if the role is "student" */}
          {role === "student" && <Route path="/find-teachers" element={<FindTeacher />} />}
          <Route path="/find-teachers/:id" element={<TeacherProfile />} />

          {/* Job-related routes */}
          <Route path="/find-jobs" element={<FindJobs />} />

          {/* General routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/auth/student-login" element={<StudentLoginPage />} />
          <Route path="/login/auth/teacher-login" element={<TeacherLoginPage />} />
          <Route path="/login/auth/student-login/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/auth/student-signup" element={<StudentSignupPage />} />
          <Route path="/signup/auth/teacher-signup" element={<TeacherSignupPage />} />

          {/* My Queries */}
          <Route path="/my-queries" element={<MyQuery />} />

          {/* After Login as Student */}
          <Route path="/post-job" element={<PostAJobRequirement />} />

          {/* Catch-all route to redirect to home if path doesn't match */}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
