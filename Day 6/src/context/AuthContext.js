import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("student"); 

  const loginAsStudent = () => {
    setIsLoggedIn(true);
    setRole("student");
  };

  const loginAsTeacher = () => {
    setIsLoggedIn(true);
    setRole("teacher");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, loginAsStudent, loginAsTeacher, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
