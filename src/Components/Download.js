import React from "react";
import Button from "@mui/material/Button";
// import { AiOutlineCloudDownload } from "react-icons/ai";

import "./Download.css";

export default function Download(props) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(props.Name).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        // alink.setAttribute("download", "Blockchain.pdf");
        alink.download = props.Name;
        alink.click();
      });
    });
  };
  return (
    <div className="download_body">
      <div className="download_sub_body">
        <div className="download_image">
          <img src="folder.png" alt="NONE" className="image_" />
        </div>
        <div className="content-download">
          <div className="upper_content">
            <p className="gradient__text" style={{ fontWeight: "700" }}>
              {props.Title}
            </p>{" "}
            <p className="subdiv-content">{props.Description} </p>
          </div>
          <div className="lower_content">
            <Button variant="contained" onClick={onButtonClick}>
              Download Syllabus
            </Button>{" "}
            {/* <AiOutlineCloudDownload size={25} style={{ marginLeft: "10px" }}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
