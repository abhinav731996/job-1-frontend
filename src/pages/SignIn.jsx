import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">
          Welcome Back
        </h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </Form.Group>

          <Button
            variant="primary"
            className="auth-btn"
            type="submit"
          >
            Sign In
          </Button>
        </Form>

        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </Container>
  );
};

export default SignIn;