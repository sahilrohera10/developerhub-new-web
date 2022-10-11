import React from "react";
import AllCourses from "../Components/AllCourses";
import Headers from "../Components/Header";
import Partners from "../Components/Partners";
import Quote from "../Components/Quote";
import UniPartner from "../Components/UniPartner";

export default function LandingPage() {
  return (
    <div>
      <Headers />
      <Quote />
      <AllCourses />
      <Partners />
      <UniPartner />
    </div>
  );
}
