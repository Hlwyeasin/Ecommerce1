import React, { useEffect, useState } from "react";

import { FaRegHeart, FaStarHalfStroke } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import ProductRating from "./ProductRating";
import {Link} from 'react-router'

const ProductRightPart = () => {
  const [productData, setProducData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 6;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducData(data.products));
  }, []);
 
   const totalProducts = productData.length;
   const totalPages = Math.ceil(totalProducts/ productPerPage)
   const indexOfLastProduct = currentPage * productPerPage
   const indexOfFirstProduct = indexOfLastProduct -productPerPage
   
    const currentProduct = productData.slice(indexOfFirstProduct, indexOfLastProduct)
   
  const data =[...Array(totalPages).keys()].map((index) => index +1);

  return (
    <div className="mt-[21px] mb-[104px]">
      <div className="flex justify-between mt-[60px] flex-wrap relative">
        <div className="flex items-center gap-x-3 top-[-60px] absolute right-0 z-40 mb-[30px]">
          <p className="font-primary text-base leading-6">Show : </p>
          <div>
            <input
              type="text"
              className="w-[97px] h-[29px] rounded-[5px] border border-[#D9D9D9] outline-0 text-center"
            />
          </div>
        </div>

        {currentProduct.map((product) => (
          <Link to={`/product/${product.id}`} className=" relative w-[270px] mb-[20px]">
            <div className="absolute top-3 right-3 z-[999]">
              <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <FaRegHeart size={22} />
              </div>
              <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <LiaEyeSolid size={22} />
              </div>
            </div>

            <div className="bg-[#5f4f4f0f] ml-[25px] group relative py-[52px] px-[65px] rounded">
              <img src={product.thumbnail} alt="" />
              <div className="absolute bottom-0 left-0 w-full hidden group-hover:block">
                <p className="bg-black text-white font-primary font-medium py-2 text-center">
                  Add To Cart ball
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className=" font-primary font-medium">{product.title}</p>
              <p className="font-primary font-medium py-2 text-primary">
                ${product.price} <del className="text-green-500">$760</del>{" "}
              </p>

              <div>
                <ProductRating rating={product.rating} />
              </div>
            </div>
          </Link>
        ))}

        <div className="flex gap-x-5">
          {data.map((item) => (
            <div 
            onClick={() => setCurrentPage(item)}
            className={`cursor-pointer py-2 px-4 rounded ${
                currentPage === item ? "bg-black text-white" : "bg-gray-300 text-black"
              }`}

            >{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRightPart;
