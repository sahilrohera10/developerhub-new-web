import React from "react";
import "./University.css";
import "./University_card";
import University_card from "./University_card";
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
const University = () => {
  return (
    <div>
    <div className="university_body">
      <div id="reverse" className="university_banner">
        <div className="banner_heading1">Universities</div>

        <div className="banner_image">
          <img src="university.jfif" alt="" />
        </div>
      </div>
      <div className="university_services">
        <p className="services_header">Services</p>
       
            <div className="services_card">
              {CardArray.map((d) => (
                <University_card data={d} />
              ))}
            </div>
      </div>
    </div>
    </div>
  );
};

export default University;
