import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="front box">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
         */}
        <img src={props.data.img} alt="" className="front_Img" />
      </div>
      <div className="back">
        <div>
          <p>{props.data.text}</p>
          {/* <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p> */}
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
}
