import React, { useState } from "react";
import signupimg from "../assets/signupimg.png";
import { FcGoogle } from "react-icons/fc";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // 👁️‍🗨️ Eye icons
import { Link } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const login = () => {
  const auth = getAuth()
  const [emaill, setEmaill] = useState("");
  const [passowrd, setPassword] = useState("");

  const [emaillErr, setEmaillErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [showPassword, setShowPassword] = useState(false); // 👁️‍🗨️

  const handleEmaill = (e) => {
    setEmaill(e.target.value);
    setEmaillErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleCreatAccount = () => {
    if (!emaill) {
      setEmaillErr("Please insert your email");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaill)) {
      setEmaillErr("Insert a valid email, please");
    }

    if (!passowrd) {
      setPasswordErr("Please insert a password");
    } else if (!/(?=.*[a-z])/.test(passowrd)) {
      setPasswordErr("At least one lowercase letter is required");
    } else if (!/(?=.*[A-Z])/.test(passowrd)) {
      setPasswordErr("At least one uppercase letter is required");
    } else if (!/(?=.*[0-9])/.test(passowrd)) {
      setPasswordErr("At least one number is required");
    } else if (!/(?=.*[!@#$%^&*])/.test(passowrd)) {
      setPasswordErr("At least one special character is required");
    } else if (!/(?=.{8,})/.test(passowrd)) {
      setPasswordErr("Password must be at least 8 characters");
    }

    if (emaill && passowrd) {
      signInWithEmailAndPassword(auth, emaill, passowrd)
  .then((userCredential) => {
    toast.success("login done")
   
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
    }
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

      <div className="flex">
        <div>
          <img src={signupimg} alt="#signupimg" />
        </div>

        <div className="ml-[129px] mt-[125px]">
          <h2 className="font-medium text-[36px] text-pink-700  border-s-fuchsia-900 border-b ">
            Login in to Exclusive
          </h2>
          <p className="font-medium text-base mt-6 leading-6">
            Enter your details below
          </p>

          <div className="mt-[48px]">
            <div className="my-[40px]">
              <input
                onChange={handleEmaill}
                className="w-[370px] border-b focus:outline-0 py-2"
                type="email"
                placeholder="Enter your Email"
              />
              <p className="text-red-500 text-sm">{emaillErr}</p>
            </div>

            {/* 👁️ Password Section with Eye Toggle */}
            <div className="mb-[40px] relative">
              <input
                onChange={handlePassword}
                className="w-[370px] border-b focus:outline-0 py-2 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
              />
              <div
                className="absolute top-2 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
              <p className="text-red-500 text-sm">{passwordErr}</p>
            </div>

            <div className="w-[370px] bg-primary py-[16px] text-center">
              <button
                onClick={handleCreatAccount}
                className="font-medium text-white rounded-lg"
              >
                Log in
              </button>
            </div>

            <div className="mt-[16px] border-2 py-4 w-[371px]">
              <div className="flex gap-x-4 items-center justify-center cursor-pointer">
                <FcGoogle />
                <h2 className="font-semibold">Sign up with Google</h2>
              </div>
            </div>

            <div className="mt-[32px] text-center font-medium">
              <Link to="/signup">Create an Account.</Link>
              <Link to="/forgotpassword"> Forgot password </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
