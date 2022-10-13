import React from "react";
import AllCourses from "../Components/AllCourses";
import Blog from "../Components/Blog";
import Headers from "../Components/Header";
import Partners from "../Components/Partners";
import Quote from "../Components/Quote";
import Roadmap from "../Components/Roadmap";
import UniPartner from "../Components/UniPartner";

export default function LandingPage() {
  return (
    <div>
      <Headers />
      <Quote />
      <AllCourses />
      <Roadmap />
      <Blog />
      <Partners />
      <UniPartner />
    </div>
  );
}
