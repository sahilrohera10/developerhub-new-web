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

export default function LandingPage() {
  return (
    <div>
      <Headers />
      <Quote />
      <AllCourses />
      <Roadmap />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Partners />
      <UniPartner />
      <AcceleratorPartner />
      <Collaborate />
    </div>
  );
}
