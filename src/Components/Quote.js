import React from "react";
import "./Quote.css";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   duration: 0.8,
      //   delay: 0.5,
      //   ease: [0, 0.71, 0.2, 1.01],
      // }}
      viewport={{ once: false }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
      className="about"
    >
      <p className="about-up">
        <span style={{ color: "#9340FF" }}>
          Blockchain, Metaverse, AR/VR and AI/ML
        </span>{" "}
        are not just buzzwords but the future of the technology that we depend
        lot upon.
      </p>

      <p className="about-down">
        These technologies are shaping future of the world and offer exclusive
        career opportunities for skilled professionals. However, to make a
        career in the futuristic technologies like these you need to be on the
        top of technology courses.
      </p>
    </motion.div>
  );
}
