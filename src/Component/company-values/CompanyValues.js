import React from "react";
import { data } from "../../companyData";
import "./companyValues.scss";

const CompanyValue = () => {
  return (
    <section>
      <div className="company-value-container" id="company">
        <div className="company-value-wrapper">
          <h2>ערכי החברה</h2>

          <div className="company-value">
            {data.map((item, i) => (
              <div className="company-value-items" key={i}>
                <>
                  <div className="company-value-outer-item">
                    <div className="company-value-inner-item">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="arrow"></div>
                  <div className="company-value-item-text">
                    <p>{item.desc}</p>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValue;
