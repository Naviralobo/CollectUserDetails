import React from "react";
import "./Card.css";

const Card = (props) => {
  let classNaam = "card " + props.className;
  return <div className={classNaam}>{props.children}</div>;
};

export default Card;
