import { Navbar, Nav, Container } from "react-bootstrap";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const MainNavbar = () => {
  const { user } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Salud Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav> {/* Left side of navbar */}
          <Nav className="align-items-center">
            {" "}
            {/* Right side of navbar, aligned items */}
            {user ? (
              <>
                <div className="d-flex align-items-center">
                  {" "}
                  {/* Flex container for profile */}
                  <img
                    src={user.picture}
                    alt="Profile"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <span className="mr-3">
                    {user.given_name} {user.family_name}
                  </span>{" "}
                  {/* Name with margin */}
                </div>
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
