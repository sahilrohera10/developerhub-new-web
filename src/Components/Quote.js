import React from "react";
import "./Quote.css";

export default function Quote() {
  return (
    <div className="about">
      <p className="about-up">
        <span style={{ color: "#9340FF" }}>
          Blockchain, Metaverse, AR/VR and AI/ML
        </span>{" "}
        are not just buzzwords but the future of the technology that we depend
        lot upon.
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
        These technologies are shaping future of the world and offer exclusive
        career opportunities for skilled professionals. However, to make a
        career in the futuristic technologies like these you need to be on the
        top of technology courses.
      </p>
    </div>
  );
}
