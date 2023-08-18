import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
      
      <Navbar bg="dark" data-bs-theme="dark" style={{height:"7rem"}}>
      <img className="imgLogo" src={require("../../img2.png")} />
      
        <Container>
          <Navbar.Brand href="/LoginPage"> LOGIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/HomePage">Home</Nav.Link>
            

              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="HomePage">PRODUCTS</NavDropdown.Item>

                <NavDropdown.Divider />
                <Nav.Link href="/AddProduct">ADD PRODUCT</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container >
          <Navbar.Brand style={{marginLeft:"2%", fontSize:"20px"}}>Welcome to Electronic State, here you can find some products to new and veteran djs.</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
      
    </div>
  );
};

export default NavBar;
