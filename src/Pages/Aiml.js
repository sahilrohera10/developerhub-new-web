import React, { useEffect } from "react";

import aimlImg from "../assets/Aiml.png";
import aimlVd from "../assets/Aiml.mp4";

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
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            AI/ML
          </span>
          &nbsp;short for artificial intelligence (AI) and machine learning
          (ML)—represents an important evolution in computer science and data
          processing that is quickly transforming a vast array of industries.
          Artificial intelligence generally refers to processes and algorithms
          that are able to simulate human intelligence, including mimicking
          cognitive functions such as perception, learning and problem solving.
          Machine learning and deep learning (DL) are subsets of AI.
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
              Data is an increasingly important business asset, with the amount
              of data generated and stored globally growing at an exponential
              rate. Of course, collecting data is pointless if you don’t do
              anything with it, but these enormous floods of data are simply
              unmanageable without automated systems to help. Artificial
              intelligence, machine learning and deep learning give
              organizations a way to extract value out of the troves of data
              they collect, delivering business insights, automating tasks and
              advancing system capabilities.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              USE CASES
            </h4>
            <p>
              AI/ML is being used in healthcare applications to increase
              clinical efficiency, boost diagnosis speed and accuracy, and
              improve patient outcomes. Telecommunications In the
              telecommunications industry, machine learning is increasingly
              being used to gain insight into customer behavior, enhance
              customer experiences, and to optimize 5G network performance,
              among other things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aiml;
