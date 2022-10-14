import React, { useEffect } from "react";

import aimlImg from "../assets/Aiml.png";
import aimlVd from "../assets/Aiml.mp4";
import Download from "../Components/Download";

const Aiml = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main_body">
      <div className="header">
        <div className="header_img">
          <img
            style={{ width: "200px", height: "180px" }}
            src={aimlImg}
            alt="Aiml"
          />
        </div>
        <div className="header_heading">ML</div>
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          Our{" "}
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            Artificial Intelligence and Machine Learning
          </span>{" "}
          i.e., AI/ML offers comprehensive and rigorous curriculum. It covers
          all major concepts and technologies that have some role in AI/ML. The
          new and exciting world of AI/ML has huge market which according to
          various sources grew to USD 58.3 billion in 2021 and set to go up to
          USD 309.6 billion by 2026.
        </p>
      </div>
      <div className="sub_body">
        <div className="sub_body_left">
          <video autoPlay loop muted>
            <source src={aimlVd} type="video/mp4" />
          </video>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 className="gradient__text">FUTURE OF AI/ML</h3>
            <p className="upper_content">
              The demand for AI talent pool high as the governments are moving
              towards digitization. Even private organizations are accelerating
              their digital transformation initiatives to meet the modern-day
              requirements.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              Uniquely Placed AI/ML Course
            </h4>
            <p>
              Our fundamental goal with the course is to help you develop skills
              that are key in Artificial Intelligence and Machine Learning.
              Whether you are a fresher or a working professional, you would
              develop an understanding of AI & ML and shape your career in the
              industry. <br />
              We will further help you master the fundamental concepts of AI/ML
              technologies. Apart from Deep Learning, regression techniques you
              would also learn Machine Learning algorithms. <br />
              Nonetheless, with these courses and hundreds of practical use
              cases and industry projects you will gain the required skills.
            </p>
          </div>
        </div>
      </div>
      <Download Name = "Blockchain.pdf" Title = "AI-ML" Description = "AI/ML course is an amalgamation of comprehensive and rigorous curriculum." />
    </div>
  );
};

export default Aiml;
