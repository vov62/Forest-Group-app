import React from "react";
// import logo from "../../images/web-logo.png";
import logo from "../../images/FG-- logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <div className="right-nav">
          <div className="logo">
            {/* <img src={logo} alt="company logo" width={50} /> */}
            <img src={logo} alt="company logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about">מי אנחנו?</a>
              </li>
              <li>
                <a href="#company"> ערכי החברה</a>
              </li>
              <li>
                <a href="#customer">לקוחות שלנו</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="left-nav">
          <a href="#contact" className="contact-btn">
            צרו קשר
          </a>
          <div className="social-media">
            <div className="social-media-icon">
              <a href="#*">
                <FiFacebook size={25} />
              </a>
            </div>
            <div className="social-media-icon">
              <a href="#*">
                <AiOutlineInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-headline">
        <h1>קבוצת פורסט</h1>
        <div className="headline-content">
          <h5>
            המשרד המוביל לנכסי נדל"ן ברמה הגבוהה ביותר <br />
            אתם רחוקים פגישת הכרות אחת מהנכס הבא שלכם
          </h5>
        </div>
        <div className="headline-contact-link">
          <a href="*#" className="contact-btn">
            צרו קשר
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
