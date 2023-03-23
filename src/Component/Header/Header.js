import React, { useState } from "react";
import logo from "../../images/FG-- logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  // navbar state
  const [clicked, setClicked] = useState(true);

  const handleLinkClick = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <div className="hamburger-nav" onClick={() => setClicked(!clicked)}>
          <RxHamburgerMenu size={20} />
        </div>

        {/* mobile menu */}
        <div className={clicked ? "mobile-menu noActive" : "mobile-menu"}>
          <div className="mobile-menu-close">
            <AiOutlineClose size={25} onClick={() => setClicked(!clicked)} />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#about" onClick={handleLinkClick}>
                  מי אנחנו?
                </a>
              </li>
              <li>
                <a href="#company" onClick={handleLinkClick}>
                  ערכי החברה
                </a>
              </li>
              <li>
                <a href="#customer" onClick={handleLinkClick}>
                  לקוחות שלנו
                </a>
              </li>
            </ul>

            <button>
              <a
                href="#contact"
                className="contact-btn"
                onClick={handleLinkClick}
              >
                צרו קשר
              </a>
            </button>

            <div className="social-media">
              <div className="social-media-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100068839242785"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <FiFacebook size={25} />
                </a>
              </div>
              <div className="social-media-icon">
                <a
                  href="https://www.instagram.com/forestgroupp/ "
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <AiOutlineInstagram size={25} />
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* desktop nav */}
        <nav>
          <img src={logo} className="logo" alt="company logo" />
          <ul className={clicked ? "navbar active" : "navbar"}>
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

        <div className="left-nav">
          <button>
            <a href="#contact" className="contact-btn">
              צרו קשר
            </a>
          </button>

          <div className="social-media">
            <div className="social-media-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100068839242785"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FiFacebook size={25} />
              </a>
            </div>
            <div className="social-media-icon">
              <a
                href="https://www.instagram.com/forestgroupp/ "
                target={"_blank"}
                rel={"noreferrer"}
              >
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
          <button className="contact-btn">
            <a href="*#contact">צרו קשר</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
