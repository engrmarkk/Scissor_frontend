import React from "react";
import Login from "../components/login";


  /********************************************************************************
   * A HOC (Higer Order Component) that takes in other component as children 
   * and checks if they are accessible for only authenticated users
   *******************************************************************************/

export const AuthGuard = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (<>{children}</>) : (<><Login /></>) ;
};
