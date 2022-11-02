import React from "react";
import "./University.css";
import "./University_card";
import University_card from "./University_card";
const CardArray = [
  {
    img: "courses.jpg",
    // text: "courses_services.jfif",
    heading: "Courses",
    // link: "/blockchain",
  },
  {
    img: "jobs_services.jfif",
    // text: "jobs_services.jfif ",
    heading: "Jobs",
    // link: "/blockchain",
  },
  {
    img: "project_services.jfif",
    // text: "project_services.jfif  ",
    heading: "Projects",
    // link: "/aiml",
  },
  {
    img: "internship_services.jfif",
    // text: " internship_services.jfif  ",
    heading: "Internship",
    // link: "/aiml",
  },
  {
    img: "r&d_services.jfif",
    // text: " r&d_services.jfif ",
    heading: "R&D",
    // link: "/blockchain",
  },
  {
    img: "accelator_services.jfif",
    // text: "accelator_services.jfif  ",
    heading: "Accelerator",
    // link: "/aiml",
  },
  {
    img: "incubation_services.jfif",
    // text: " incubation_services.jfif ",
    heading: "Incubation",
    // link: "/blockchain",
  },
];
const University = () => {
  return (
    <div>
      <div className="university_body">
        <div id="reverse" className="university_banner">
          <div className="banner_heading1">Universities</div>

          <div className="banner_image">
            <img src="university.jfif" alt="" />
          </div>
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

export default University;
