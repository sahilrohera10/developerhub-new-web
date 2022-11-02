import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./Partner.css";
import rd1 from "../assets/r&d1.jpg";
import rd2 from "../assets/r&d2.png";
import rd3 from "../assets/r&d3.png";
import rd4 from "../assets/r&d4.jpg";
import rd5 from "../assets/r&d5.png";

const arr = [rd1, rd2, rd3, rd4, rd5];

const renderSlides = () =>
  arr.map((item) => {
    return (
      <div>
        <img src={item} style={{ margin: "0px 50px", height: "80px" }} />
      </div>
    );
  });
export default function RDpartner() {
  return (
    <div>
      <Box className="adWrapper">
        <Typography
          sx={{ fontSize: "2rem" }}
          className="adsHeading"
          style={{ marginTop: "24px" }}
        >
          R&D Partners
        </Typography>
        <Marquee
          speed="60"
          pauseOnHover={true}
          gradient={false}
          style={{ marginTop: "30px" }}
        >
          {renderSlides()}
        </Marquee>
      </Box>
    </div>
  );
}
