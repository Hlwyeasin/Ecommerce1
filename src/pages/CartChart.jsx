// import React from "react";
// import Container from "../Layout/Container";
// import imagep from "../assets/chartCartMonitorimg.png";
// import { IoChevronUpOutline } from "react-icons/io5";
// import { FaChevronDown } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import Product from "./Product";
//   import { ToastContainer, toast } from 'react-toastify';

// const CartChart = () => {
//    const notify = () => toast("Wow so easy!");
//   const data = useSelector((state) => state.cartDetails.cartItems);

//   const totalPrice = data.reduce((prev, current) => {
//     console.log(prev, "prev");
//     console.log(current.price, "current");

//     return prev + current.price * current.cartQun;
//   }, 0);

//   return (
//     <div className="py-20 font-primary">
//       <Container>
//         <div>
//           {/* first list div */}
//           <div className="flex justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
//             <div className="w-[25%]">Product</div>
//             <div className="w-[25%]">Price</div>
//             <div className="w-[25%]">Quantity</div>
//             <div className="w-[25%]">Subtotal</div>
//           </div>

//           {/* scound list div */}

//           {data.map((Product) => (
//             <div className=" mt-5 flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
//               <div className="w-[25%] flex items-center gap-x-5">
//                 <img
//                   className="w-[25%]"
//                   src={Product.thumbnail}
//                   alt="#monitor"
//                 />
//                 <p>{Product.title}</p>
//               </div>
//               <div className="w-[25%]">${Product.price}</div>
//               <div className="w-[25%]">
//                 <div className="border rounded py-[10px] px-[12px] inline-block">
//                   <div className="flex items-center gap-x-4">
//                     <p>{Product.cartQun}</p>
//                     <div>
//                       <IoChevronUpOutline />
//                       <FaChevronDown />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-[25%]">
//                 $ {Product.price * Product.cartQun}{" "}
//               </div>
//             </div>
//           ))}

//           <div className="mt-10  flex">
//             {/* div one copone code  */}
//             <div>
//               <input
//                 className="border py-4 rounded"
//                 type="text"
//                 placeholder="Coupon Code"
//               />

//               <button
//                 className="mt-10 ml-4 py-4 px-[60px] bg-primary
//               text-white font-primary font-semibold rounded-lg cursor-pointer"
//               >
//                 Apply Coupon
//               </button>
//             </div>

//             {/* div two prossecd to pay  */}
//             <div className="ml-[240px] w-[470px] border py-[32px] px-6">
//               <p>Cart Total</p>

//               <div className="flex  justify-between  border-b py-4">
//                 <p>Subtotal:</p>
//                 <p>${totalPrice}</p>
//               </div>

//               <div className="flex justify-between border-b py-4">
//                 <p>Shipping:</p>
//                 <p>Free</p>
//               </div>

//               <div className=" relative flex justify-between ">
//                 <div>
//                   <p>Total:</p>
//                   <p>${totalPrice}</p>
//                 </div>

//                 <div className="mx-auto text-center">

//                   <button

//                     className="mt-10 py-4 px-[60px] bg-primary
//               text-white font-primary font-semibold rounded-lg cursor-pointer"
//                   >
//                     Procees to checkout
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CartChart;

// ######################################new change wiht full code here #####################################################

import React, { useState } from 'react';
import Container from '../Layout/Container';
import { IoChevronUpOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import Toastify styles
import { cartQuntity } from '../Slices/cartSlice';

const CartChart = () => {
  const notify = () =>
    toast.success('Proceeding to checkout!', {
      position: 'top-left',
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
    });

  const data = useSelector((state) => state.cartDetails.cartItems);
  const dispatch = useDispatch();

  const [couponText, setCouponText] = useState('');
  const [discount, setDiscount] = useState(0);

  const totalPrice = data.reduce((prev, current) => {
    return prev + current.price * current.cartQun;
  }, 0);

  const handleIncrement = (id) => {
    console.log('increment', id);
    dispatch(cartQuntity({ id: id, type: 'increment' }));
  };

  // #33##################Drecrement###############

  const handleDecrement = (id) => {
    console.log('increment', id);
    dispatch(cartQuntity({ id: id, type: 'decrement' }));
  };

  const handleChange = (e) => {
    setCouponText(e.target.value);
  };
  const handleApplyCoupon = () => {
    console.log(couponText);
    if (couponText == 'fdr20') {
      setDiscount(totalPrice * 0.2);
    }
  };
  console.log(discount);

  const total = totalPrice - discount;

  return (
    <div className="py-20 font-primary">
      {/* ✅ Toast container at top-level */}
      <ToastContainer />

      <Container>
        <div>
          {/* Header Row */}
          <div className="flex justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%]">Product</div>
            <div className="w-[25%]">Price</div>
            <div className="w-[25%]">Quantity</div>
            <div className="w-[25%]">Subtotal</div>
          </div>

          {/* Product List */}
          {data.map((product, index) => (
            <div
              key={product.id}
              className="mt-5 flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]"
            >
              <div className="w-[25%] flex items-center gap-x-5">
                <img
                  className="w-[25%]"
                  src={product.thumbnail}
                  alt="#monitor"
                />
                <p>{product.title}</p>
              </div>
              <div className="w-[25%]">${product.price}</div>
              <div className="w-[25%]">
                <div className="border rounded py-[10px] px-[12px] inline-block">
                  <div className="flex items-center gap-x-4">
                    <p>{product.cartQun}</p>
                    <div>
                      <IoChevronUpOutline
                        onClick={() => handleIncrement(index)}
                      />
                      <FaChevronDown onClick={() => handleDecrement(index)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">${product.price * product.cartQun}</div>
            </div>
          ))}

          {/* Coupon & Total */}
          <div className="mt-10 flex">
            {/* Coupon Input */}
            <div>
              <input
                onChange={handleChange}
                // onChange={(e) =>setCouponText(e.target.value)}
                name="coupon"
                className="border py-4 rounded px-4"
                type="text"
                placeholder="Coupon Code"
              />
              <button
                onClick={handleApplyCoupon}
                className="mt-10 ml-4 py-4 px-[60px] bg-primary text-white font-primary font-semibold rounded-lg cursor-pointer"
              >
                Apply Coupon
              </button>
            </div>

            {/* Cart Total & Checkout */}
            <div className="ml-[240px] w-[470px] border py-[32px] px-6">
              <p className="text-lg font-semibold mb-4">Cart Total</p>

              <div className="flex justify-between border-b py-4">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <div className="flex justify-between border-b py-4">
                <p>Discount:</p>
                <p>${discount}</p>
              </div>

              <div className="flex justify-between border-b py-4">
                <p>Shipping:</p>
                <p>Free</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-lg font-bold">Total:</p>
                  <p className="text-xl font-bold text-green-600">${total}</p>
                </div>

                <button
                  onClick={notify}
                  className="py-4 px-[60px] bg-primary text-white font-primary font-semibold rounded-lg cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartChart;
