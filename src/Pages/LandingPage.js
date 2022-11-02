import React from "react";
import AcceleratorPartner from "../Components/AcceleratorPartner";
import AllCourses from "../Components/AllCourses";
import Blog from "../Components/Blog";
import Collaborate from "../Components/Collaborate";
import Headers from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import Partners from "../Components/Partners";
import Quote from "../Components/Quote";
import Roadmap from "../Components/Roadmap";
import Testimonial from "../Components/Testimonial";
import UniPartner from "../Components/UniPartner";
import adImg from "../assets/ad-img.jpeg";
import "./LandingPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Enter from "../Components/Enter";
import RDpartner from "../Components/RDpartner";

export default function LandingPage() {
  const [display, setDisplay] = useState("block");
  return (
    <div>
      {/* <img className="ad" style={{ display: display }} src={adImg} alt="" />
      <p
        className="close-btn"
        style={{ display: display }}
        onClick={() => setDisplay("none")}
      >
        X
      </p>
      <Link to="/form">
        <button style={{ display: display }} className="apply-btn">
          Apply Now
        </button>
      </Link> */}
      <Headers />
      <Quote />
      <AllCourses />
      <Roadmap />
      <Enter />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Partners />
      <UniPartner />
      <AcceleratorPartner />
      <RDpartner />
      <Collaborate />
    </div>
  );
}
