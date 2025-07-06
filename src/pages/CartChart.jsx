import React from "react";
import Container from "../Layout/Container";
import imges from "../../../fsssion-project/src/assets/chartCartMonitorimg.png";

const CartChart = () => {
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
          <div className="flex items-center justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%] flex items-center gap-x-5">
                <img className="w-[54px]" src={imges} alt="" />
                <p>LCD Monitor</p>

            </div>
            <div className="w-[25%]">$$650</div>
            <div className="w-[25%]">
            <div className="border rounded py-[10px] px-[12px] inline-block">
                <p>01</p>
                <div>
                    
                </div>
            </div>
            </div>
            <div className="w-[25%]">Subtotal</div>
          </div>
          {/* third list div */}
          <div className="flex justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%]">Product</div>
            <div className="w-[25%]">Price</div>
            <div className="w-[25%]">Quantity</div>
            <div className="w-[25%]">Subtotal</div>
          </div>
          {/* four list div */}
         <div className="flex justify-between py-6 px-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.1)]">
            <div className="w-[25%]">Product</div>
            <div className="w-[25%]">Price</div>
            <div className="w-[25%]">Quantity</div>
            <div className="w-[25%]">Subtotal</div>
          </div>


        </div>
      </Container>
    </div>
  );
};

export default CartChart;
