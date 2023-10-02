import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/**
 * Renders a protected route component that checks if a user is authenticated.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {ReactNode} props.children - The children components to be rendered.
 * @param {string} props.redirectPath - The path to redirect if user is not authenticated (default: "/login").
 * @returns {JSX.Element|ReactNode} The JSX element representing the protected route or the children components.
 */
export default function ProtectedRoute({ children, redirectPath = "/login" }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
