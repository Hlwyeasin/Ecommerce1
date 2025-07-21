import React from "react";
import signupimg from "../assets/signupimg.png";

const Registration = () => {
  return (
    <section className="pt-[60px] pb-[140px] font-primary">
      <div className="flex ">
        <div>
          <img src={signupimg} alt="#signupimg" />
        </div>

        <div className="ml-[129px] mt-[125px]">
          <div>
            <h2 className="font-medium text-[36px]">Create an account</h2>
            <p className="font-medium text-base mt-6 leading-6">
              Enter your details below
            </p>

            <div className="mt-[48px]">

              <div>
                <input className=" w-[370px] border-b focus:outline-0 py-2 " type="text" placeholder="Enter your Name" />
              </div>
              <div className="my-[40px]">
                <input className=" w-[370px] border-b focus:outline-0 py-2 " type="gmail" placeholder="Enter your Email" />
              </div>

              <div className="mb-[40px]">
                <input className=" w-[370px] border-b focus:outline-0 py-2 " type="password" placeholder="Enter your Password" />
              </div>

              <div className="w-[370px] bg-primary py-[16px] text-center">
                 <button className="font-medium text-white rounded-lg">Create Account</button>
              </div>

            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default Registration;
