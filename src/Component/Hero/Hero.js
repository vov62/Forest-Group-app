import React from "react";
import agent from "../../images/kvret3.png";
import agent2 from "../../images/david3.png";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="right">
          <h1>
            FOREST <span>GROUP</span> סוכנות נדל"ן
          </h1>
          <h3>
            עדיין לא מצאת את הבית שלך? <span>Forest Group</span> סוכנות נדל"ן
            תמצא לכם את הנכס בסטייל ובמחיר המתאים לכם!
          </h3>

          <div className="contact-btn">
            <button className="section-contact-btn">צור קשר</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
