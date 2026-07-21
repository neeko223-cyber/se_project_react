import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isAuthChecking, children }) {
  if (isAuthChecking) {
    return null;
  }

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
