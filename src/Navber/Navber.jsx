import React from "react";
import exlogo from "../../src/assets/exlogo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Container from "../Layout/Container";
import { Link } from "react-router";

const Navber = () => {
  return (
    <nav className=" pt-[43px] pb-[14px] border-b border-[#D9D9D9]">
      <Container>
        <div className="flex ">
          <div className="w-[20%] ">
            <img src={exlogo} alt="exlogo" />
          </div>

          <div className="w-[40%] font-primary text-base ">
            <ul className="flex gap-x-[38px] items-center">
              <li>
                <Link Link to="/">
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link Link to="/product">
                  Product
                </Link>
              </li>

              <li>
                <Link Link to="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link Link to="">
                  About
                </Link>
              </li>

              <li>
                <Link Link to="/signup">
                  {" "}
                  signup
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[40%]  relative">
            <div className="w-[243px] relative">
              <input
                className="w-full bg-[#F5F5F5] rounded-sm  py-[7px] pr-[82px] "
                type="text"
                placeholder="What are you looking for?"
              />

              <FiSearch size={24} className="absolute top-[5px] left-[185px]" />

              <Link to="CartChart">
                <HiMiniShoppingCart
                  className="absolute top-[5px] left-[389px]"
                  size={24}
                />
              </Link>
              <FaRegHeart
                size={24}
                className="absolute top-[5px] left-[305px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
