import React, { useEffect } from "react";
import "./blockchain.css";
import blockchainImg from "../assets/blockchain.png";
import blockchainMp4 from "../assets/blockchainmp4.mp4";
import blockchainImg2 from "../assets/blockchain1.png";
const Blockchain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main_body">
      <div className="header">
        <div className="header_img">
          <img src={blockchainImg} alt="blockcahin" />
        </div>
        <div className="header_heading">LOCKCHAIN</div>
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          <span className="gradient__text">Blockchain</span> is a shared,
          immutable ledger that facilitates the process of recording
          transactions and tracking assets in a business network. An asset can
          be tangible (a house, car, cash, land) or intangible (intellectual
          property, patents, copyrights, branding). Virtually anything of value
          can be tracked and traded on a blockchain network, reducing risk and
          cutting costs for all involved. The innovation with a blockchain is
          that it guarantees the fidelity and security of a record of data and
          generates trust without the need for a trusted third party.
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
            <h3 className="gradient__text">FUTURE of BLOCKCHAIN</h3>
            <p className="upper_content">
              We believe that blockchain technology will be transformative in
              the tech similar to what the internet did for the world back in
              the 90s and early 2000s,” said John Zanni, President of the
              Acronis Foundation, in Forbes. “Today, part of our storage and
              backup software lets users notarize any digital data and put that
              fingerprint on the blockchain to ensure it can’t be tampered with
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              USE CASES
            </h4>
            <p>
              Supply chain ,Healthcare ,Government, Retail Media and
              advertising, Oil and gas, Telecommunications, Manufacturing
              ,Insurance ,Financial services ,Travel and transportation.
            </p>
          </div>
        </div>
      </div>
      {/* <div id="sub_body_reverse" className="sub_body">
        <div className="sub_body_left">
          <div className="left_content">
            <img src={blockchainImg2} alt="Blockchain" />
          </div>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 id="heading" className="gradient__text">
              Is Blockchain Secure?
            </h3>
            <p className="upper_content">
              Blockchain technology achieves decentralized security and trust in
              several ways. That is, they are always added to the “end” of the
              blockchain. Hash codes are created by a mathematical function that
              turns digital information into a string of numbers and letters. If
              that information is edited in any way, then the hash code changes
              as well.
            </p>
            <hr />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Blockchain;
