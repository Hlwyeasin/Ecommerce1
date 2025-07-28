import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const ProductRating = ({ rating }) => {
  const FullRating = Math.floor(rating);
  const halfRating = rating % 1 >= 0.5;
  const emptyRating = 5 - FullRating - (halfRating ? 1 : 0);
  return (
    <div className="flex">
      {[...Array(FullRating)].map(() => (
        <FaStar className="text-[#FFAD33]" />
      ))}
      {halfRating && <FaStarHalfAlt className="text-[#FFAD33]" />}
      {[...Array(emptyRating)].map(() => (
        <CiStar />
      ))}
    </div>
  );
};

export default ProductRating;
