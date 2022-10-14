import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <hero>
        <div className="container-new col-xxl-12 px-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 header-content-div">
              {/* <h1 className="title">Courses Available</h1> */}

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
                Let's go invent tomorrow instead of worring about what happened
                yesterday.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="/blockchain"
                  style={{ textDecoration: "none", color: "white" }}
                >
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </hero>
    </header>
  );
};

export default Headers;
