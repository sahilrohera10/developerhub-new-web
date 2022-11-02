import React from "react";
import { Link } from "react-router-dom";
import askQ from "../assets/ask.jpg";
import feedbackImg from "../assets/feed_b.jpg";
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import "./Enter.css";
export default function Enter() {
  return (
    <div className="bcg">

    <div className="enter-main">
 
       <div className="main_a"> 
       <img className="enterImgs" src={askQ} alt="" />
      <Link to="/forum">
        <div className="ask_Q">Ask Questions <span className="arrow_i"><BsFillArrowRightSquareFill /></span> </div>
      </Link>  
       </div> 
       <div className="main_b">
       <img className="enterImgs" src={feedbackImg} alt="" />
       <Link to="/feedback">
        <div className="Feed_back">Feedback <span className="arrow_i"><BsFillArrowRightSquareFill /></span> </div>

      </Link>
        </div>      
      
        </div>
    </div>
  );
}
