import React from "react";
import { Link } from "react-router-dom";
import discussionImg from "../assets/discussionFormImg.png";
import feedbackImg from "../assets/feedbackImg.png";
import "./Enter.css";
export default function Enter() {
  return (
    <div className="enter-main">
      <Link to="/forum">
        <img className="enterImgs" src={discussionImg} alt="" />
      </Link>

      <Link to="/feedback">
        <img className="enterImgs" src={feedbackImg} alt="" />
      </Link>
    </div>
  );
}
