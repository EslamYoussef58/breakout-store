import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "../../data/Data";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-11/12 mt-5 m-auto">
      <div className="rounded-md overflow-hidden">
        <Slider {...settings}>
          {banner.map((item, index) => (
            <div className="w-full" key={index}>
              <img
                className="w-full rounded-md h-[550px] object-cover"
                src={item.img}
                alt=""
              />

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
