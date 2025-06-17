


import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/banner iphone slider imag.jpg";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        borderRadius: "50%",
        right: "-25px",
        zIndex: 2
      }}
      onClick={onClick}
    >
      <FaAngleLeft color='black' size={20} /> 
    </div>
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        borderRadius: "0%",
        left: "-25px",
      
        zIndex: 2
      }}
      onClick={onClick}
    >
      <FaAngleRight color='black' size={40} />

    </div>
  );
}

const BannerRight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='w-[80%] ml-5'>
      <Slider {...settings}>
        <div>
          <img src={img} className="w-full" alt="Slide 1" />
          <h3>1</h3>
        </div>
        <div>
          <img src={img} className="w-full" alt="Slide 2" />
          <h3>2</h3>
        </div>
        <div>
          <img src={img} className="w-full" alt="Slide 3" />
          <h3>3</h3>
        </div>
        <div>
          <img src={img} className="w-full" alt="Slide 4" />
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default BannerRight;


