import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const currentUser = localStorage.getItem("currentUser");

  return currentUser ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;