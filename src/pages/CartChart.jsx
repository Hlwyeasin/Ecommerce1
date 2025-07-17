import React from "react";
import Container from "../Layout/Container";
// import imges from "../assets/chartCartMonitorimg.png";
import imagep from "../assets/chartCartMonitorimg.png";

import { IoChevronUpOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import Product from "./Product";

const CartChart = () => {
  const data = useSelector((state) => state.cartDetails.cartItems);
  console.log(data);

  const  totalPrice = data.reduce ((prev, current)=>{
    console.log(prev, "prev");

    console.log(current.price, "current"); 

    return prev + (current.price * current.cartQun)


    
  },0)
  console.log(totalPrice);
  

  return (
    <div className="py-20 font-primary">
      <Container>
        <div>
          {/* first list div */}
          <div className="flex justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%]">Product</div>
            <div className="w-[25%]">Price</div>
            <div className="w-[25%]">Quantity</div>
            <div className="w-[25%]">Subtotal</div>
          </div>

          {/* scound list div */}

         {
          data.map((Product)=>(
             <div className=" mt-5 flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%] flex items-center gap-x-5">
              <img className="w-[25%]" src={Product.thumbnail} alt="#monitor" />
              <p>{Product.title}</p>
            </div>
            <div className="w-[25%]">${Product.price}</div>
            <div className="w-[25%]">
              <div className="border rounded py-[10px] px-[12px] inline-block">
                <div className="flex items-center gap-x-4">
                  <p>{Product.cartQun}</p>
                  <div>
                    <IoChevronUpOutline />
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">$ {Product.price * Product.cartQun} </div>
          </div>
          ))
         }
          
          {/* third list div */}

          {/* <div className=" mt-5 flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%] flex items-center gap-x-5">
              <img className="w-[25%]" src={imagep} alt="#monitor" />
              <p>LCD Monitor</p>
            </div>
            <div className="w-[25%]">$650</div>
            <div className="w-[25%]">
              <div className="border rounded py-[10px] px-[12px] inline-block">
                <div className="flex items-center gap-x-4">
                  <p>01</p>
                  <div>
                    <IoChevronUpOutline />
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">$650</div>
          </div> */}

          {/* four list div */}

          {/* <div className=" mt-5 flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%] flex items-center gap-x-5">
              <img className="w-[25%]" src={imagep} alt="#monitor" />
              <p>LCD Monitor</p>
            </div>
            <div className="w-[25%]">$650</div>
            <div className="w-[25%]">
              <div className="border rounded py-[10px] px-[12px] inline-block">
                <div className="flex items-center gap-x-4">
                  <p>01</p>
                  <div>
                    <IoChevronUpOutline />
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">$650</div>
          </div> */}

          <div className="mt-10  flex">
            {/* div one copone code  */}
            <div>
              <input
                className="border py-4 rounded"
                type="text"
                placeholder="Coupon Code"
              />

              <button
                className="mt-10 ml-4 py-4 px-[60px] bg-primary
              text-white font-primary font-semibold rounded-lg cursor-pointer"
              >
                Apply Coupon
              </button>
            </div>

            {/* div two prossecd to pay  */}
            <div className="ml-[240px] w-[470px] border py-[32px] px-6">
              <p>Cart Total</p>

              <div className="flex  justify-between  border-b py-4">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>

              <div className="flex justify-between border-b py-4">
                <p>Shipping:</p>
                <p>Free</p>
              </div>

              <div className=" relative flex justify-between ">
                <div>
                  <p >Total:</p>
             <p>${totalPrice}</p>
                </div>

                <div className="mx-auto text-center">
                  <button
                    className="mt-10 py-4 px-[60px] bg-primary
              text-white font-primary font-semibold rounded-lg cursor-pointer"
                  >
                    Procees to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartChart;
