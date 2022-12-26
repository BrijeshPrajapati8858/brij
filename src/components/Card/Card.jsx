import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
    <div>  <img src={emoji} alt="" />
      <span>{heading}</span></div>
    
      <span>{detail}</span>
     
    </div>
  );
};

export default Card;
