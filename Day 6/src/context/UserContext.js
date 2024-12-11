import React, { createContext, useState, useContext } from 'react';



// Create the context
const UserContext = createContext();

// Custom hook to use the user data in components
export function useUser() {
  return useContext(UserContext);
}

// UserProvider component to wrap the app and provide user data
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
