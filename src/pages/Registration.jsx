import React, { useState } from "react";
import signupimg from "../assets/signupimg.png";
import { FcGoogle } from "react-icons/fc";
 import { Bounce, ToastContainer, toast } from 'react-toastify';

const Registration = () => {
  const [name, setName] = useState("");
  // emaill input
  const [emaill, setEmaill] = useState("");
  // passowrd 
  const [passowrd, setpassword] = useState("");
 
  const [nameErr, setNameErr] = useState("");

  const [emaillErr, setEmaillErr] = useState("");

  const [passwordErr, setPasswordErr] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };
    // emaill input
  const handleEmaill = (e) => {
    setEmaill(e.target.value);
    setEmaillErr("");
  };
  // password input
  const handlePassword = (e) => {
    setpassword(e.target.value);
    setPasswordErr("");
  };



  const handleCreatAccount = () => {
    console.log(name);

    if (!name) {
      setNameErr("please fill the name");
    }
    // emaill condition

    if (!emaill) {
      setEmaillErr("please insurt your emaill");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaill)) {
        setEmaillErr("insurt a valill emaill please");
      }
    }
    // password condition
    if(!passowrd){
      setPasswordErr("pleae password insert")
    }else{
      if(!/(?=.*[a-z])/.test(passowrd)){
        setPasswordErr("smaill charecter need")

      }else if(!/(?=.*[A-Z])/.test(passowrd)){
        setPasswordErr("upper latter need")
      }
      else if(!/(?=.*[0-9])/.test(passowrd)){
        setPasswordErr(" plese give number")
      }
      else if(!/(?=.*[!@#$%^&*])/.test(passowrd)){
        setPasswordErr("spcial latter")
      }
      else if(!/(?=.{8,})/.test(passowrd)){
        setPasswordErr("must be 8 latter")
      }
    }
    if(name && emaill && passowrd){
      toast.success("Registration Successfully done");
      
    }
    
    console.log(emaill,name,passowrd);
    
  };

  return (
    <section className="pt-[60px] pb-[140px] font-primary">
       <ToastContainer
              position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
               />
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
                <p>{nameErr}</p>

                <input
                  onChange={handleName}
                  className=" w-[370px] border-b focus:outline-0 py-2 "
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="my-[40px]">
                <input
                  onChange={handleEmaill}
                  className=" w-[370px] border-b focus:outline-0 py-2 "
                  type="gmail"
                  placeholder="Enter your Email"
                />
                <p>{emaillErr}</p>
              </div>

              <div className="mb-[40px]">
                <input
                  onChange={handlePassword}
                  className=" w-[370px] border-b focus:outline-0 py-2 "
                  type="text"
                  placeholder="Enter your Password"
                />
                <p>{passwordErr}</p>
              </div>

              <div className="w-[370px] bg-primary py-[16px] text-center">
                <button
                  onClick={handleCreatAccount}
                  className="font-medium text-white rounded-lg"
                >
                  Create Account
                </button>
              </div>

              <div className="mt-[16px] border-2 py-4 w-[371px] ">
                <div className="flex gap-x-4 items-center justify-center cursor-pointer">
                  <FcGoogle />

                  <h2 className="font-semibold">Sign up with Google</h2>
                </div>
              </div>

              <div className="mt-[32px] text-center font-medium">
                Already have account? <span>Log in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
