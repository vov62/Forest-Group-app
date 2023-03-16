import React from "react";
import Slider from "react-slick";
import leftArrow from "../../images/prev-arrow-svg.svg";
import rightArrow from "../../images/next-arrow-svg.svg";

import "./CardList.scss";
import Card from "./../Card/Card";

const CardList = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div className="img-prev-arrow-cont-left">
      <img
        src={leftArrow}
        alt="prevArrow"
        {...props}
        className="img-prev-arrow"
      />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div className="img-prev-arrow-cont-right">
      <img
        src={rightArrow}
        alt="nextArrow"
        {...props}
        className="img-prev-arrow"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <Card key={i} name={item.name} desc={item.desc} id={item.id} />
          );
        })}
      </Slider>
    </>
  );
};

export default CardList;
