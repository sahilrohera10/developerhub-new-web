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
import DU from "../assets/DU.png";
import IPU from "../assets/IPU.png";
import JNU from "../assets/JNU.png";
import MDU from "../assets/MDU.png";
import MU from "../assets/MU.png";
import UPES from "../assets/UPES.png";

const arr = [DU, IPU, JNU, MDU, MU, UPES];

const renderSlides = () =>
  arr.map((item) => {
    return (
      <div>
        <img src={item} style={{ margin: "0px 50px", height: "80px" }} />
      </div>
    );
  });
export default function UniPartner() {
  return (
    <div>
      <Box className="adWrapper">
        <Typography
          sx={{ fontSize: "2rem" }}
          className="adsHeading"
          style={{ marginTop: "24px" }}
        >
          University Partners
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
