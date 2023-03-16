import React from "react";
import "./testimonial.scss";
import CardList from "./../CardList/CardList";
import { companyTestimonialData } from "../../companyData";

const Testimonials = () => {
  return (
    <div className="testimonials-container" id="customer">
      <div className="testimonials-wrapper">
        <h2 style={{ color: "#000" }}>לקוחות ממליצים</h2>
        <CardList data={companyTestimonialData} />
      </div>
    </div>
  );
};

export default Testimonials;
