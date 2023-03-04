import React from "react";
import Navbar from "./Nav/Navbar";
// import logo from "../../images/FG-- logo.png";
import logo from "../../images/web-logo.png";
import logo2 from "../../images/FG-fullLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        {/* <img src={logo} alt="company logo" width={50} /> */}
        <img src={logo} alt="company logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#*">מי אנחנו?</a>
          </li>
          <li>
            <a href="#*"> ערכי החברה</a>
          </li>
          <li>
            <a href="#*">הלקוחות שלנו</a>
          </li>
        </ul>
      </nav>

      <div className="header-contact-btn">
        <button>צור קשר</button>
      </div>
    </header>
  );
};

export default Header;
