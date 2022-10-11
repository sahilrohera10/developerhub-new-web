import React, { useEffect } from "react";
// import "./ar_vr.css";
import arVr from "../assets/AR_VR-new.png";
import arVrMp4 from "../assets/AR_VR.mp4";
const Ar_vr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main_body">
      <div className="header">
        <div className="header_img">
          <img
            style={{ width: "200px", height: "180px" }}
            src={arVr}
            alt="AR/VR"
          />
        </div>
        {/* <div className="header_heading"></div> */}
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            Augmented Reality and Virtual Reality
          </span>
          &nbsp; are important terms in an increasingly digital world. Although
          they are two different technologies, both terms are often used as
          synonyms. But what are the differences and similarities between AR and
          VR?The main difference between AR vs VR is that VR is a computer
          generated simulation. Therefore, there are also important differences
          between AR headsets vs VR headsets. Hardware geared towards VR
          requires sensory devices that translate real-world movements into a
          modeled reality.
        </p>
      </div>
      <div className="sub_body">
        <div className="sub_body_left">
          <video autoPlay loop muted>
            <source src={arVrMp4} type="video/mp4" />
          </video>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 className="gradient__text">Future Of AR & VR</h3>
            <p className="upper_content">
              Augmented reality and virtual reality markets to grow fast will be
              factors like higher demand for smartphone-based augmented reality,
              growing takeovers and company mergers, advanced augmented and
              virtual reality technology, high demand for advanced tools in the
              entertainment sector, and more adoption of AR VR technology in
              education, health care, and retail industries. The augmented
              reality and virtual reality market size stood at approx. $15
              billion in 2020 is projected to grow at a staggering rate of a
              CAGR 40%. It will touch around $450 billion by 2030.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              USE CASES
            </h4>
            <p>
              In the military, this technology is used in flight simulators or
              battlefield simulations. In sports, digital training devices help
              athletes improve their own performance and analyze their
              techniques
            </p>
          </div>
        </div>
      </div>
      {/* <div id="sub_body_reverse" className="sub_body">
        <div className="sub_body_left">
          <div className="left_content">
            <img src="arvr.png" alt="Blockchain" />
          </div>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 id="heading" className="gradient__text">
              Is AR & VR Secure?
            </h3>
            <p className="upper_content">
            The focus of VR is to simulate a new reality. By using a VR screen, the user can perceive and interact in the digital world. This requires two lenses between the user and the screen. They interpret the movement of the eyes and adapt the individual movement to the VR. Therefore, in this case, extensive hardware is necessary to isolate the user from the real world.
            </p>
            <hr />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Ar_vr;
