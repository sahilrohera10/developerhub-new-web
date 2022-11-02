import React from "react";
import Card from "./Card";
import "./AllCourses.css";

const CardArray = [
  {
    img: "MetaverseImg1.png",
    title:"Metaverse",
    text: "Metaverse development course that includes a 3D character developing avatars and for that you need to be skilled in Blender, Maya, Cinema 4D, etc. amongst others. ",
    link: "/meta",
    button:"Read More"
  },
  {
    img: "MetaverseImg1.png",
    title:"AI & ML",
    text: "AI/ML course is an amalgamation of comprehensive and rigorous curriculum. It would cover key concepts and technologies of Artificial Intelligence and Machine Learning with higher utility value.",
    link: "/meta",
    button:"Read More"
  },
  {
    img: "MetaverseImg1.png",
    title:"Blockchain",
    text: "Blockchain technology courses for Multichain, Hyperledger, Ethereum, and Stellar, etc. amongst others. ",
    link: "/meta",
    button:"Read More"
  },
  {
    img: "MetaverseImg1.png",
    title:"AR & VR",
    text: "AR/VR course is a great course for you if you want to take your imagination & creative skills to the next level. ",
    link: "/meta",
    button:"Read More"
  },];
export default function AllCourses() {
  return (
    <div className="AllCourses">
      <p className="animate-charcter">Explore Courses</p>
      <div className="Card_Div">
        {CardArray.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
}
