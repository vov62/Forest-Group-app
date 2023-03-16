import React from "react";
import avatars from "../../images/Avatars.png";
import apostrophes from "../../images/apostrophes.png";
import "./Card.scss";

const Card = ({ name, desc, id }) => {
  return (
    <div className="testimonials-cards-container" key={id}>
      <div className="testimonials-card">
        <img src={apostrophes} alt="apostrophes" className="apostrophes-img" />
        <div className="testimonials-top">
          <img src={avatars} alt="avatar" />
          <h3>{name}</h3>
        </div>
        <div className="testimonials-bottom">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
