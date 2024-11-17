// UserContext.js
import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Can be "admin" or "user"

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};
