import React from "react";
import fullLogo from "../../images/FG-fullLogo.png";
import "./about.scss";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-header">
          <img src={fullLogo} alt="company logo" />
        </div>
        <div className="about-content">
          <h3>מי אנחנו</h3>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי
            קלובר בריקנה סטום, לפריקך תצטריק לרטי.
          </p>
          <div className="contact-btn">
            <button className="section-contact-btn">צור קשר</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
