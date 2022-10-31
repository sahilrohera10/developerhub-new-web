import React from "react";
import "./feedback.css";
import { FaFileAlt } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="FContainer">
      <div className="main1">
        <div className="feedContainer">
          <div className="feedTitle">
            <h3>Feedback request</h3>
          </div>
          <div className="upperPart">
            <div className="subU">
              <FaFileAlt size={100}/>
              <p>Your opinion matters</p>
            </div>
            <div className="subHead">
              <p>Have some ideas how to improve our product? </p>
              <p>
                <b>Give us your feedback.</b>
              </p>
            </div>
          </div>
          <hr />
          <div className="midPart">
            <p>
              <b>Rating :</b>
            </p>
            <div className="radioB">
              <input type="radio" name="choice" id="" />
              <label htmlFor="Very good">Very good</label>
              <input type="radio" name="choice" id=""/>
              <label htmlFor="Good">Good</label>
              <input type="radio" name="choice" id=""/>
              <label htmlFor="Medicore">Medicore</label>
              <input type="radio" name="choice" id=""/>
              <label htmlFor="Bad">Bad</label>
              <input type="radio" name="choice" id=""/>
              <label htmlFor="Very bad">Very bad</label>
            </div>
          </div>
          <div className="subPart">
            <p>
              <b>Your recommendation :</b>
            </p>
            <textarea
              className="textarea"
              rows="6"
             
              id="TITLE"
              placeholder="Provide extra details..."
            ></textarea>
          </div>
          <button type="SUBMIT">Submit</button>

        
        </div>
        
      </div>
    </div>
  );
};

export default Feedback;
