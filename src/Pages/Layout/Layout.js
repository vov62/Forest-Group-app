import React from "react";
import About from "../../Component/about/About";
import Header from "../../Component/Header/Header";
import CompanyValue from "../../Component/company-values/CompanyValues";
import Testimonials from "./../../Component/Testimonial/Testimonial";
import Contact from "./../../Component/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <About />
      <CompanyValue />
      <Testimonials />
      <Contact />
    </>
  );
};
export default Layout;
