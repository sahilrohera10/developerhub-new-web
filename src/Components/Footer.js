import React from "react";
// import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="Upper-div">
        <div>
          <div className="footer-logo">UNBOUNCE</div>
          <div className="footer-aboutUs-div">
            <p className="headline-name">About Us</p>
            <p className="footer-aboutUs-content">
              Startup - selling Courses regarding
              Blockchain,AI/ML,AR/VR,Metaverse
            </p>
          </div>
          <div>
            <p className="footer-contactUs">Contact Us</p>
            <p className="footer-contactNo">
              <BsFillTelephoneFill />
              498184818
            </p>
            <p className="footer-contactMail">
              <AiOutlineMail />
              Cross.Tower@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p className="headline-name">Courses</p>
          <p>Blockchain</p>
          <p>Metaverse</p>
          <p>AR/VR</p>
          <p>AI/ML</p>
        </div>
        <div>
          <p className="headline-name">Helpful Links</p>
          <p>Services</p>
          <p>Supports</p>
          <p>Terms & Conditions</p>
          <p>Private Policy</p>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="Lower-div">
        <p>
          {" "}
          <AiFillFacebook /> Facebook
        </p>
        <p>
          <AiFillTwitterCircle />
          Twitter
        </p>
        <p>
          <AiFillInstagram />
          Instagram
        </p>
        <p>
          <AiFillLinkedin />
          Linkedin
        </p>
      </div>
    </div>
  );
}
