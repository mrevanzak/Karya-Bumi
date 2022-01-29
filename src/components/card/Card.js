import React from "react";
import "./card.scss";

const Card = ({ img, name, position, desc }) => {
  return (
    <div className="card">
      <div className="card__profile">
        <img src={img} alt="profile" />
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
      <div className="card__text">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
