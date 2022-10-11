import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <Navbar className="Navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="Navbar_Brand" href="#home">
            <b>
              <logo>//</logo>
              <logoname>Unbounce</logoname>{" "}
            </b>
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
            <Link to="/form">
              <Button
                variant="contained"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(56, 72, 241)",
                }}
              >
                Register
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hero>
        <div className="container-new col-xxl-12 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="title">Courses Available</h1>

              <TypeAnimation
                className="typeAnimation"
                sequence={[
                  "Blockchain",
                  2000,
                  "Metaverse",
                  2000,
                  "AR/VR",
                  2000,
                  "AI/ML",
                  () => {
                    // console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                // className="typing-annimation"
              />
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  className="header-btn"
                  variant="contained"
                  style={{
                    marginRight: "10px",
                    borderRadius: "50px",
                    backgroundColor: "rgb(56, 72, 241)",
                  }}
                >
                  Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </hero>
    </header>
  );
};

export default Headers;
