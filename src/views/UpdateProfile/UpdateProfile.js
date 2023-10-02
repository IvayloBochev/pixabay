import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import RedirectSuggestion from "../../components/RedirectSuggestion";

/**
 * Renders a component for updating the user's password.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the update profile component.
 */
function UpdateProfile() {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmitUpdate(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      updateUserPassword(passwordRef.current.value);
      navigate("/");
    } catch {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmitUpdate}>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Update Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <RedirectSuggestion route="/" linkText="Cancel" />
    </>
  );
}

export default UpdateProfile;
