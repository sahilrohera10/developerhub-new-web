import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Headers = () => {
  return (
    <header>
      <hero>
        <div className="container-new col-xxl-12 px-4">
          <div className="row align-items-center g-5">
            {/* <motion.div    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="col-lg-6 header-content-div"
            >
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
                cursor={false}
                repeat={Infinity}
                // className="typing-annimation"
              />
              <div className="lead">
                Let's go invent tomorrow instead of worring about what happened
                yesterday.
                <br />
                <br />
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
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </motion.div>
            {/* /> */}
          </div>
        </div>
      </hero>
    </header>
  );
};

export default Headers;
