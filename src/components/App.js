import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/DashboardView/Dashboard";
import SignUp from "../views/SignUpView/SignUp";
import Login from "../views/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "../views/ForgotPassword/ForgotPassword";
import UpdateProfile from "../views/UpdateProfile/UpdateProfile";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center mt-4">
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <ProtectedRoute>
                    <UpdateProfile />
                  </ProtectedRoute>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
