import React from "react";
import fullLogo from "../../images/FG-fullLogo.png";
import "./about.scss";

const About = () => {
  return (
    // <section>
    //   <div className="about-container" id="about">
    //     <div className="about-company-items">
    //       <div className="about-company-item">
    //         <div className="about-company-inner-item">
    //           <h4>
    //             צוות
    //             <br />
    //             מקצועי
    //           </h4>
    //         </div>
    //       </div>
    //       <div className="about-company-item">
    //         <div className="about-company-inner-item">
    //           <h4>
    //             יחס
    //             <br />
    //             אישי
    //           </h4>
    //         </div>
    //       </div>
    //       <div className="about-company-item">
    //         <div className="about-company-inner-item">
    //           <h4>
    //             תהליך
    //             <br />
    //             בטוח
    //           </h4>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="about-wrapper">
    //       <div className="about-wrapper-content">
    //         <div className="about-wrapper-header">
    //           <img src={fullLogo} alt="company logo" />
    //         </div>
    //         <div className="about-content">
    //           <h2>מי אנחנו</h2>
    //           <p>
    //             אנו מאמינים בערך הגבוה של אמינות ומקצועיות, מתמקדים בספקטרום רחב
    //             של צרכי הלקוחות שלנו. אנו מציעים שירותי ייעוץ מקצועי ומלאי דירות
    //             עשיר ומגוון עם פתרונות פיננסיים מתאימים לכל לקוח.
    //             <br />
    //             משרדנו מאמין כי הקשר האישי עם הלקוח הוא מרכיב חשוב וכי השמירה על
    //             המעמד והאמינות שלנו זה המפתח להצלחתנו ולהצלחת הלקוחות שלנו. אנו
    //             מתמחים בסיוע ללקוחות במציאת הנכס המתאים להם בצורה מהירה ויעילה
    //             תוך מתן חווית שירות משמעותית וחדשנית.
    //           </p>
    //           <div className="contact-more-details">
    //             <p>התעניינתם? בואו צרו קשר לפרטים נוספים</p>
    //           </div>
    //           <div className="about-contact-btn">
    //             <button className="section-contact-btn">
    //               <a href="#contact">צרו קשר</a>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // תיקון

    <section>
      <div className="about-container" id="about">
        <div className="exam">
          <div className="about-company-items">
            <div className="about-company-item">
              <div className="about-company-inner-item">
                <h4>
                  צוות
                  <br />
                  מקצועי
                </h4>
              </div>
            </div>
            <div className="about-company-item">
              <div className="about-company-inner-item">
                <h4>
                  יחס
                  <br />
                  אישי
                </h4>
              </div>
            </div>
            <div className="about-company-item">
              <div className="about-company-inner-item">
                <h4>
                  תהליך
                  <br />
                  בטוח
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrapper">
          <div className="about-wrapper-content">
            <div className="about-wrapper-header">
              <img src={fullLogo} alt="company logo" />
            </div>
            <div className="about-content">
              <h2>מי אנחנו</h2>
              <p>
                אנו מאמינים בערך הגבוה של אמינות ומקצועיות, מתמקדים בספקטרום רחב
                של צרכי הלקוחות שלנו. אנו מציעים שירותי ייעוץ מקצועי ומלאי דירות
                עשיר ומגוון עם פתרונות פיננסיים מתאימים לכל לקוח.
                <br />
                משרדנו מאמין כי הקשר האישי עם הלקוח הוא מרכיב חשוב וכי השמירה על
                המעמד והאמינות שלנו זה המפתח להצלחתנו ולהצלחת הלקוחות שלנו. אנו
                מתמחים בסיוע ללקוחות במציאת הנכס המתאים להם בצורה מהירה ויעילה
                תוך מתן חווית שירות משמעותית וחדשנית.
              </p>
              <div className="contact-more-details">
                <p>התעניינתם? בואו צרו קשר לפרטים נוספים</p>
              </div>
              <div className="about-contact-btn">
                <button className="section-contact-btn">
                  <a href="#contact">צרו קשר</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
