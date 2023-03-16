import React from "react";
import section5 from "../../images/pic_section 5.png";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact-container">
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

              <form>
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
                  <label for="select">מעניין אותי</label>
                  <select name="select" className="form-element">
                    <option value="" disabled selected hidden>
                      יש לבחור פרמטר
                    </option>
                    <option value="valor1" style={{ color: "#000" }}>
                      מכירה
                    </option>
                    <option value="valor2" style={{ color: "#000" }}>
                      השכרה
                    </option>
                  </select>
                </div>
              </form>
              <div className="form-section-bottom-btn">
                <button type="submit">צרו קשר </button>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-wrapper">
              <div className="footer-contact-details"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
