import React, { useEffect } from "react";
// import "./ar_vr.css";
import arVr from "../assets/AR_VR-new.png";
import arVrMp4 from "../assets/AR_VR.mp4";
import Download from "../Components/Download";
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
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          When it comes to making a career in{" "}
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            {" "}
            Augmented Reality (AR) and Virtual Reality (VR)
          </span>
          , learning the skills is fundamental. Our course on AR/VR will take
          your imagination & creative skills to the next level. You would be
          acquainted with the newer tech for dimensional content and able to
          develop sensationalised user experience.
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
            <h3 className="gradient__text">Learn what it matters in AR/VR</h3>
            <p className="upper_content">
              When you are doing AR/VR course with us you will learn how to use
              the latest tech & software. It will help you start a career in VR
              and AR as you will be well equipped with programming languages
              like C or C++, 3D modelling and design software, etc. amongst
              others. <br />
              Our course will also educate you on User Experience Design (UX)
              and mobile app development as majority of the VR headsets sold
              worldwide are phone-based.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              Why Our Course is Unique?
            </h4>
            <p>
              This is the only course that brings you with end-to-end training.
              The Augmented and Virtual Reality course from our experts will
              enable you gain skills in immersive experience, app development
              and VR games.
            </p>
          </div>
        </div>
      </div>
      <Download  Name = "Blockchain.pdf" Title = "AR-VR" Description = " AR/VR course is a great course for you if you want to take your imagination & creative skills to the next level. " />
    </div>
  );
};

export default Ar_vr;
