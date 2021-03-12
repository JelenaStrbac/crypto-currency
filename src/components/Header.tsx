import { FC } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = {
  isAuthenticated: boolean;
};

const Header: FC<Props> = ({ isAuthenticated }) => {
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

      {!isAuthenticated ? <Button variant="primary">Login</Button> : null}
    </Navbar>
  );
};

export default Header;
