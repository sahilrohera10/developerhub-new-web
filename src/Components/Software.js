import React from "react";
import "./University_card";
import { Link } from "react-router-dom";

import University_card from "./University_card";
const CardArray = [
  {
    img: "courses.jpg",
    heading: "Courses",
  },
  {
    img: "jobs_services.jfif",
    heading: "Jobs",
  },
  {
    img: "project_services.jfif",
    heading: "Projects",
  },
  {
    img: "internship_services.jfif",
    heading: "Internship",
  },
];
const Software = () => {
  return (
    <div>
      <div className="university_body">
        <div
          id="reverse"
          className="university_banner"
          style={{
            backgroundImage: "url(Software1.webp)",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="banner_heading1">SOFTWARE</div>
        </div>
        <div className="university_services">
          <p className="services_header">Services</p>

          <div className="services_card">
            {CardArray.map((d) => (
              <University_card data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;