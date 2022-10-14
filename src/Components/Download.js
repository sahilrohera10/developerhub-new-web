import React from "react";
import Button from "@mui/material/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";

import "./Download.css";

export default function Download(props) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Blockchain.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        // alink.setAttribute("download", "Blockchain.pdf");
        alink.download = "Blockchain.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="download-div">
      <img className="folder-img" src="folder.png" alt="" />
      <div className="subdiv1">
        <p className="head-subdiv">Blockchain</p>
        <p className="subdiv-content">
          Blockchain technology courses for Multichain, Hyperledger, Ethereum,
          and Stellar, etc. amongst others.
        </p>
      </div>
      <div className="rightsubdiv">
        {/* <form method="get" action="Blockchain.pdf"> */}
        <Button variant="contained" onClick={onButtonClick}>
          Syllabus{" "}
          <AiOutlineCloudDownload size={25} style={{ marginLeft: "20px" }} />
        </Button>
        {/* </form> */}
      </div>
    </div>
  );
}
