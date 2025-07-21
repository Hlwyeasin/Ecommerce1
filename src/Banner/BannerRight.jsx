import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/banner iphone slider imag.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Custom Next Arrow
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
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FaAngleRight color="white" size={20} />
    </div>
  );
}

// Custom Prev Arrow
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
        borderRadius: "50%",
        left: "-25px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FaAngleLeft color="white" size={20} />
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
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          background: "rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "white",
          color: "black",
          textAlign: "center",
          lineHeight: "20px",
          fontSize: "12px",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="w-[80%] ml-5 relative">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="relative">
            <img
              src={img}
              className="w-full h-[400px] object-cover"
              alt={`Slide ${num}`}
            />
            <h3 className="absolute top-4 left-4 text-white text-2xl font-bold">
              Slide {num}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerRight;
