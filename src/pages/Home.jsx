import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <Container className="py-5 d-flex justify-content-center">

      <Card
        className="shadow"
        style={{
          width: "420px",
          borderRadius: "15px",
        }}
      >
        <Card.Body>

          <div className="text-center mb-4">

            <h3>
              {user?.firstName} {user?.lastName}
            </h3>

            <p className="text-muted">
              Welcome to Dashboard
            </p>

          </div>

          <hr />

          <p>
            <strong>Email :</strong>
            <br />
            {user?.email}
          </p>

          <p>
            <strong>Phone :</strong>
            <br />
            {user?.phone}
          </p>

          <p>
            <strong>Password :</strong>
            <br />
            {user?.password}
          </p>

          <Button
            variant="danger"
            className="w-100 mt-3"
            onClick={logout}
          >
            Logout
          </Button>

        </Card.Body>
      </Card>

    </Container>
  );
};

export default Home;