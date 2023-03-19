import React from "react";
import agent from "../../images/kvret3.png";
import agent2 from "../../images/david3.png";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="right">
          <h1>קבוצת פורסט</h1>
          <h3>
            המשרד המוביל לנכסי נדל"ן ברמה הגבוהה ביותר. אתם רחוקים פגישת הכרות
            אחת מהנכס הבא שלכם
          </h3>

          <div className="contact-btn">
            <button className="section-contact-btn">
              <a href="#contact">צרו קשר</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
