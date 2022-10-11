import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export default function card(props) {
  return (
    <div className="new-card">
      <div className="front-new">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
         */}
        <img src={props.data.img} alt="" className="front_Img" />
      </div>
      <div className="back-new">
        <div style={{ width: "280px", color: "black" }}>
          <p>{props.data.text}</p>
          {/* <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p> */}
          <Link to={props.data.link}>
            <button className="button-new">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
