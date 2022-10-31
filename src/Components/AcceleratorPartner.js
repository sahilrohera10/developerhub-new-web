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
import acc1 from "../assets/acc1-img.jpg";
import acc2 from "../assets/acc2-img.jpg";
import acc3 from "../assets/acc3-img.jpg";
import acc4 from "../assets/acc4-img.png";
import acc5 from "../assets/acc5-img.png";

const arr = [acc1, acc2, acc3, acc4, acc5];

const renderSlides = () =>
  arr.map((item) => {
    return (
      <div>
        <img src={item} style={{ margin: "0px 50px", height: "80px" }} />
      </div>
    );
  });
export default function AcceleratorPartner() {
  return (
    <div>
      <Box className="adWrapper">
        <Typography
          sx={{ fontSize: "2rem" }}
          className="adsHeading"
          style={{ marginTop: "24px" }}
        >
          Accelerator Partners
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
