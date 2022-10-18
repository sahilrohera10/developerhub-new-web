import React, { useEffect } from "react";
import "./blockchain.css";
import blockchainImg from "../assets/blockchain.png";
import blockchainMp4 from "../assets/blockchainmp4.mp4";
import Download from "../Components/Download";
const Blockchain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main_body">
      <div className="header">
        {/* <div className="header_img">
          <img src={blockchainImg} alt="blockcahin" />
        </div> */}
        <div className="header_heading">BLOCKCHAIN</div>
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          Our
          <span className="gradient__text"> Blockchain </span>
          development course in India is drafted to train you with the profound
          knowledge of the technology. With the help of extensive practical
          based sessions, you would be well equipped to get employment
          opportunities in blockchain development industry. There are umpteen
          employment opportunities in blockchain development sector in India and
          abroad that you could cash in on.
        </p>
      </div>
      <div className="sub_body">
        <div className="sub_body_left">
          <video autoPlay loop muted>
            <source src={blockchainMp4} type="video/mp4" />
          </video>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 className="gradient__text">What we offer</h3>
            <p className="upper_content">
              Doing our blockchain course you would be a competent professional
              and ready for the industry. We offer the following exclusive
              features in our blockchain development course:
            </p>
            <ol style={{ color: "white" }}>
              <li style={{ marginBottom: "10px" }}>
                Our course will improve your skills on the widely used
                cryptographic and hash algorithms.
              </li>
              <li style={{ marginBottom: "10px" }}>
                You will be able to understand the implementation of a private
                blockchain and know how to implement your skills.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Skill development in the blockchain platforms like Multichain,
                Hyperledger, Ethereum, Stellar, etc. amongst others.{" "}
              </li>
            </ol>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              The Future
            </h4>
            <p>
              As Blockchain technology has taken the digital world by storm, the
              future of Blockchain technology is promising. Becoming a master in
              Blockchain technology by going through Online Degree™ in
              Blockchain unfolds the world of opportunities for you.
            </p>
          </div>
        </div>
      </div>

      <Download
        Name="Blockchain.pdf"
        Title="Blockchain"
        Description=" Blockchain technology courses for Multichain, Hyperledger, Ethereum and Stellar etc. amongst others."
      />
    </div>
  );
};

export default Blockchain;
