import React from "react";
import { Link } from "react-router-dom";
import "./University_cards.css";
import { Button } from "@mui/material";
export default function University_card(props) {
  return (
    <div className="University_card">
      <div className="University_card_img">
        <img src={props.data.img} alt="" className="front_Img" />
      </div>
      <div className="university_card_text">
        <p className="card_text">{props.data.text}</p>
        <Link to={props.data.link}>
          <Button style={{"fontSize":"14px"}} variant="contained" disableElevation>
            Disable elevation
          </Button>
        </Link>
      </div>
    </div>
  );
}
