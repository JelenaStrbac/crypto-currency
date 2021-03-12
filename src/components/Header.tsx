import { FC } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = {
  isAuthenticated: boolean;
  handleLogin: () => void;
};

const Header: FC<Props> = ({ isAuthenticated, handleLogin }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        {isAuthenticated ? (
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        ) : null}
      </Nav>

      {!isAuthenticated ? (
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      ) : null}
    </Navbar>
  );
};

export default Header;
