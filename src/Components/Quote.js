import React from "react";
import "./Quote.css";

export default function Quote() {
  return (
    <div className="about">
      <p className="about-up">
        <span style={{ color: "#9340FF" }}>Kinnectric</span> is a startup
        looking to change the way people connect.
      </p>
      <hr
        style={{
          width: "50%",
          marginLeft: "25vw",
          height: "10px",
          borderTop: "3px solid",
          opacity: "1",
        }}
      />

      <p className="about-down">
        Our mobile app is built to seek, forge, and grow links between you,
        people you know, and people you want to know. With multiple startups
        under our belt, the team behind Kinnectric is working hard to bring you
        the only social app you will ever need.
      </p>

      {/* <div>

<p  className="course-content" >Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings.</p>

<button className='explore-btn' > <p className='btn-content' >Explore 🚀</p> </button>
        </div>


<img className='ar-img' src="ar-img.jpeg" alt="" /> */}
    </div>
  );
}
