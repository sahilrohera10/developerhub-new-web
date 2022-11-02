import React from "react";
import Card from "./Card";
import "./AllCourses.css";
import { motion } from "framer-motion";

const CardArray = [
  {
    img: "MetaverseImg1.png",
    title: "Metaverse",
    text: "Metaverse development course that includes a 3D character developing avatars and for that you need to be skilled in Blender, Maya, Cinema 4D, etc. amongst others. ",
    link: "/meta",
    button: "Read More",
  },
  {
    img: "MetaverseImg1.png",
    title: "AI & ML",
    text: "AI/ML course is an amalgamation of comprehensive and rigorous curriculum. It would cover key concepts and technologies of Artificial Intelligence and Machine Learning with higher utility value.",
    link: "/meta",
    button: "Read More",
  },
  {
    img: "MetaverseImg1.png",
    title: "Blockchain",
    text: "Blockchain technology courses for Multichain, Hyperledger, Ethereum, and Stellar, etc. amongst others. ",
    link: "/meta",
    button: "Read More",
  },
  {
    img: "MetaverseImg1.png",
    title: "AR & VR",
    text: "AR/VR course is a great course for you if you want to take your imagination & creative skills to the next level. ",
    link: "/meta",
    button: "Read More",
  },
];
export default function AllCourses() {
  return (
    <div className="AllCourses">
      <p className="animate-charcter">Explore Courses</p>
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
        className="Card_Div"
      >
        {CardArray.map((d) => (
          <Card data={d} />
        ))}
      </motion.div>
    </div>
  );
}
