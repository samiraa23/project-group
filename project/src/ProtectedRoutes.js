// ProtectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ children, role }) => {
  const { isLoggedIn, userRole } = useContext(UserContext);

  if (!isLoggedIn || (role && userRole !== role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
