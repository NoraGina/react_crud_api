import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };

  return (
    <div>
      <Navbar
        expand="sm"
        fixed="top"
        className="mb-3"
        style={{ fontSize: "1.2em", backgroundColor: "#3f5052" }}
      >
        <Container>
          <Navbar.Brand href="#home">Products menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/createProduct" className="nav-link" disabled={isCurrentURL("/createProduct")}>
                Create product
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/products" className="nav-link" disabled={isCurrentURL("/products")}>
                Products
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
