import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export default function card(props) {
  return (
        <div class="card" >
          <div class="content">
            <p class="title" style={{"fontSize":"30px"}}>{props.data.title}</p>
            <p class="copy">{props.data.text}</p>
            <Link to={props.data.link}>
            <button class="btn">{props.data.button}</button>
            </Link>
          </div>
        </div>
  
  );
}
