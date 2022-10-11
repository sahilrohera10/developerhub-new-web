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
import amazon from "../assets/amazon.png";
import wipro from "../assets/wipro.png";
import tcs from "../assets/tcs.png";
import microsoft from "../assets/microsoft.png";
import infosys from "../assets/infosys.png";
import google from "../assets/google.png";

const arr = [amazon, wipro, tcs, microsoft, infosys, google];

const renderSlides = () =>
  arr.map((item) => {
    return (
      <div>
        <img src={item} style={{ margin: "0px 50px", height: "80px" }} />
      </div>
    );
  });
export default function Partners() {
  return (
    <div>
      <Box className="adWrapper">
        <Typography
          sx={{ fontSize: "2rem" }}
          className="adsHeading"
          style={{ marginTop: "24px" }}
        >
          Corporate Partners
        </Typography>
        <Marquee
          speed="40"
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
