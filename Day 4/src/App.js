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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/find-teachers" element={<FindTeacher/>}/>
        <Route path="/:id" element={<TeacherProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
