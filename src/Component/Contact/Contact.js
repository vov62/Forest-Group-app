import React, { useState, useRef } from "react";
import section5 from "../../images/pic_section 5.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import logo from "../../images/FG-fullLogo.png";
import copyright from "../../images/Vector.png";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [selected, setSelected] = useState();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wrmqace",
        "template_037q0jn",
        form.current,
        "Br1XhKCHE9u0uR2uA"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <section>
          <div className="contact-content">
            <img src={section5} alt="homes" />

            <div className="form-section">
              <h2>
                צרו קשר
                <br />
                ואנחנו נדאג לכל השאר
              </h2>

              <form ref={form} onSubmit={submitHandle}>
                <div className="form-group-wrapper">
                  <div className="form-group">
                    <label htmlFor="Full Name">שם מלא</label>
                    <input
                      type="text"
                      className="form-element"
                      name="Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">טלפון</label>
                    <input
                      type="tel"
                      className="form-element"
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">דוא"ל</label>
                    <input type="email" className="form-element" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="select">מעניין אותי</label>
                    <select name="select" className="form-element">
                      <option value="" disabled hidden>
                        יש לבחור פרמטר
                      </option>
                      <option value={selected} style={{ color: "#000" }}>
                        מכירה
                      </option>
                      <option value={selected} style={{ color: "#000" }}>
                        השכרה
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-section-bottom-btn">
                  <button type="submit">
                    {loading ? "נא המתן..." : "צרו קשר"}
                  </button>
                </div>
                {isFormSubmitted ? (
                  <div className="thankYouMessage">
                    <p>תודה שהשארת פרטים, נחזור אליך בהקדם :)</p>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>

          <div className="footer">
            <div className="footer-contact-details">
              <div className="footer-contact img">
                <img src={logo} alt="logo" />
              </div>
              <div className="footer-contact address">
                <p>כתובת</p>
                <span>הרצל 185, רחובות</span>
              </div>
              <div className="footer-contact hours">
                <p>ימים ושעות פתיחה</p>
                <span>ימים א'-ה' </span>
                <span>08:00-16:00 </span>
              </div>
              <div className="footer-contact mail">
                <p>דרכים ליצירת קשר</p>
                <span>forestgroup@gmail.com</span>
                <span>טלפון במשרד - 0547311581</span>
              </div>
              <div className="footer-contact-socials-icons">
                <p>חפשו אותנו גם ברשתות</p>

                <div className="footer-contact-social-icon">
                  <a
                    href="https://www.facebook.com/profile.php?id=100068839242785"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <FiFacebook size={25} />
                  </a>
                  <div className="footer-contact-social-icon">
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
            <div className="footer-company-copyright">
              <img src={copyright} alt="copyright" />
              <p>כל הזכויות שמורות לקבוצת פורסט, 2023</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
