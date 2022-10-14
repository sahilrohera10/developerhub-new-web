import React from "react";
import Card from "./Card";
import "./AllCourses.css";

const CardArray = [
  {
    img: "BlockchainImg1.jpeg",
    text: "Blockchain technology courses for Multichain, Hyperledger, Ethereum, and Stellar, etc. amongst others.",
    link: "/blockchain",
  },
  {
    img: "AI_ML1.png",
    text: "AI/ML course is an amalgamation of comprehensive and rigorous curriculum. It would cover key concepts and technologies of Artificial Intelligence and Machine Learning with higher utility value. ",
    link: "/aiml",
  },
];
const CardArray2 = [
  {
    img: "AR_VR1.png",
    text: "AR/VR course is a great course for you if you want to take your imagination & creative skills to the next level. ",
    link: "/ar-vr",
  },
  {
    img: "MetaverseImg1.png",
    text: "Metaverse development course that includes a 3D character developing avatars and for that you need to be skilled in Blender, Maya, Cinema 4D, etc. amongst others. ",
    link: "/meta",
  },
];

export default function AllCourses() {
  return (
    <div className="AllCourses">
      <p className="animate-charcter">Explore More Courses</p>
      <div className="Card_Div">
        {CardArray.map((d) => (
          <Card data={d} />
        ))}
      </div>
      <div className="Card_Div_2">
        {CardArray2.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
}
