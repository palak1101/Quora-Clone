import React from "react";
import { Avatar } from "@mui/material";
import "./CSS/QuoraBox.css";


const QuoraBox = () => {
    return (
      <div className="quoraBox">
        <div className="quoraBox__info">
          <Avatar />
        </div>
        <div className="quoraBox__quora">
          <h5>What is your question or link?</h5>
        </div>
      </div>
    );
  }
  
  export default QuoraBox;