import React from "react";
import "./header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

export default function NavComponent(props) {
  return (
    <Navbar className="Navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="Navbar_Brand" href="#home">
         <Link to='/' style= {{textDecoration:"none"}}>
            <b>
              <logo>//</logo>
              <logoname>Unbounce</logoname>{" "}
            </b>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">{/* //siderow */}</Nav>
            <Nav className="navcontent">
              <NavDropdown
                className="navdrop"
                title="Courses"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/blockchain"
                  >
                    Blockchain
                  </Link>{" "}
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link
                    to="/meta"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Metaverse
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/ar-vr"
                  >
                    AR/VR
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">AI/ML</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navdrop"
                title="Segment"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  University
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Corporate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fresher</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Software Engg.
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navdrop"
                title="Partner"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Jobs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Internship
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">R&D</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Incubation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Accelerator
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navdrop" href="#deets">
                Support
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {/* margin */}
              </Nav.Link>
            </Nav>
              {/* <Button
                variant="contained"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(56, 72, 241)",
                }}
              >
                Register
              </Button> */}
              <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(56, 72, 241)",
                }}>
                REGISTER
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
              <Link Link to="/form" style={{textDecoration:'none',}}>

                <Dropdown.Item href="#/action-2" >Others</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
