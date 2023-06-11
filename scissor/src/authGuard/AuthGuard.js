import React, { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";

  /********************************************************************************
   * A HOC (Higer Order Component) that takes in other component as children 
   * and checks if they are accessible for only authenticated users
   *******************************************************************************/

export const AuthGuard = ({ children }) => {

  const Token = localStorage.getItem("accessToken");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(Token !== null);
  }, [Token]);

  return isAuthenticated ? { children } : <Navigate to="/login" replace />;
};
