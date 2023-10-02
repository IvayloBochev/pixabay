import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert, Button, Card, CardBody } from "react-bootstrap";

/**
 * Renders a profile section with user information and actions.
 *
 * @returns {JSX.Element} The JSX element representing the profile section.
 */
function ProfileSection() {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card>
        <CardBody>
          <h2 className="text-center">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h6 className="text-center pt-4">Email: {currentUser.email}</h6>
          <h6 className="text-center pt-2 mb-3">
            Last signin: {currentUser.metadata.lastSignInTime}
          </h6>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Password
          </Link>
          <div className="w-100 text-center">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileSection;
