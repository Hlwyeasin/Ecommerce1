// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiTwitter } from "react-icons/https://github.com/mahid76/Exclusive_E-commerce/blob/main/src/assets/appleStore.pngfi";
// import { MdOutlineSend } from "react-icons/md";
// // import appleStore from "../../assets/appleStore.png";
// // import playStore from "../../assets/playStore.png";
// // import qrCode from "../../assets/qrCode.png";
// import Container from "../Layout/Container";
// import Logo from "../Logo/Logo";

// const supportList = [
// 	{
// 		des: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
// 	},
// 	{
// 		des: "exclusive@gmail.com",
// 	},
// 	{
// 		des: "+88015-88888-9999",
// 	},
// ];
// const accountList = [
// 	{
// 		des: "My Account",
// 	},
// 	{
// 		des: "Login / Register",
// 	},
// 	{
// 		des: "Cart",
// 	},
// 	{
// 		des: "Wishlist",
// 	},
// 	{
// 		des: "Shop",
// 	},
// ];
// const quickList = [
// 	{
// 		des: "Privacy Policy",
// 	},
// 	{
// 		des: "Terms Of Use",
// 	},
// 	{
// 		des: "FAQ",
// 	},
// 	{
// 		des: "Contact",
// 	},
// ];

// const Footer = () => {
// 	return (
// 		<section className="pt-[80px] pb-6 bg-black ">
// 			<Container>
// 				<div className="flex justify-between">
// 					<div className="max-w-[217px]">
// 						<Logo className={`text-white`} />
// 						<h3 className="font-primary font-medium leading-[28px] my-6 text-[20px] text-secondary ">
// 							Subscribe
// 						</h3>
// 						<p className="font-primary leading-6 text-secondary ">
// 							Get 10% off your first order
// 						</p>
// 						<div className="relative mt-4">
// 							<input
// 								className="w-full text-secondary py-3 pl-4 pr-11   border border-secondary rounded outline-0 placeholder:text-secondary/30 font-primary leading-6 "
// 								placeholder="Enter your email"
// 								type="text"
// 							/>
// 							<div className="absolute top-[14px] right-[17px]  ">
// 								<MdOutlineSend size={20} className="text-secondary" />
// 							</div>
// 						</div>
// 					</div>
// 					<div className="max-w-[175px]">
// 						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
// 							Support
// 						</h4>
// 						<ul className="flex flex-col gap-y-4">
// 							{supportList.map((items) => (
// 								<a href="#">
// 									{" "}
// 									<li className="text-secondary font-primary leading-6  ">
// 										{items.des}
// 									</li>
// 								</a>
// 							))}
// 						</ul>
// 					</div>
// 					<div className="">
// 						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
// 							Account
// 						</h4>
// 						<ul className="flex flex-col gap-y-4">
// 							{accountList.map((items) => (
// 								<a href="#">
// 									{" "}
// 									<li className="text-secondary font-primary leading-6  ">
// 										{items.des}
// 									</li>
// 								</a>
// 							))}
// 						</ul>
// 					</div>
// 					<div className="">
// 						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
// 							Quick Link
// 						</h4>
// 						<ul className="flex flex-col gap-y-4">
// 							{quickList.map((items) => (
// 								<a href="#">
// 									{" "}
// 									<li className="text-secondary font-primary leading-6  ">
// 										{items.des}
// 									</li>
// 								</a>
// 							))}
// 						</ul>
// 					</div>
// 					<div className="max-w-[198px]">
// 						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
// 							Download App
// 						</h4>
// 						<p className="text-secondary/70 font-primary font-medium leading-[18px] text-[12px] ">
// 							Save $3 with App New User Only{" "}
// 						</p>
// 						<div className="flex gap-x-2 mt-2">
// 							<div className="max-w-[80px]">
// 								{/* <img className="w-full" src={qrCode} alt="" /> */}
// 							</div>
// 							<div className="flex flex-col justify-around ">
// 								<div>
// 									{/* <img className="w-full" src={playStore} alt="" /> */}
// 								</div>
// 								<div>
// 									{/* <img className="w-full" src={appleStore} alt="" /> */}
// 								</div>
// 							</div>
// 						</div>
// 						<div className="flex gap-x-6 mt-6">
// 							<a href="#">
// 								<FaFacebookF color="ffffff" size={22} />
// 							</a>
// 							<a href="#">
// 								<FiTwitter color="ffffff" size={22} />
// 							</a>
// 							<a href="#">
// 								<FaInstagram color="ffffff" size={22} />
// 							</a>
// 							<a href="#">
// 								<FaLinkedinIn color="ffffff" size={22} />
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="w-full h-[1px] mt-15 bg-[#3d3d3d] "></div>
// 				<p className="text-center mt-4 font-primary leading-6 text-[#3d3d3d] ">© Copyright Yeasin 2024. All right reserved</p>
// 			</Container>
// 		</section>
// 	);
// };

// export default Footer;

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";
import Container from '../../Layout/Container';
import googleplay from "../../assets/googleplayStore.png";
import applestore from "../../assets/appleStore.png";
import qrcode from "../../assets/qrCode.png";
import logo from "../Logo/Logo"
import Logo from '../Logo/Logo';
// import Logo from '../Logo/Logo';
 


const Footer = () => {
	const supportList = [
	{
		des: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
	},
	{
		des: "exclusive@gmail.com",
	},
	{
		des: "+88015-88888-9999",
	},
];
const accountList = [
	{
		des: "My Account",
	},
	{
		des: "Login / Register",
	},
	{
		des: "Cart",
	},
	{
		des: "Wishlist",
	},
	{
		des: "Shop",
	},
];
const quickList = [
	{
		des: "Privacy Policy",
	},
	{
		des: "Terms Of Use",
	},
	{
		des: "FAQ",
	},
	{
		des: "Contact",
	},
];

  return (
	<div className='bg-black'>
		<Container>
			<div className="flex justify-between  text-white">
					<div className="max-w-[217px]">
					
						{<Logo className={'text-white'}></Logo>}

						<h3 className="font-primary font-medium leading-[28px] my-6 text-[20px] text-secondary ">
							Subscribe
						</h3>
						<p className="font-primary leading-6 text-secondary ">
							Get 10% off your first order
						</p>
						<div className="relative mt-4">
							<input
								className="w-full text-secondary py-3 pl-4 pr-11   border border-secondary rounded outline-0 placeholder:text-secondary/30 font-primary leading-6 "
								placeholder="Enter your email"
								type="text"
							/>
							<div className="absolute top-[14px] right-[17px]  ">
								<MdOutlineSend size={20} className="text-secondary" />
							</div>
						</div>
					</div>
					<div className="max-w-[175px]">
						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
							Support
						</h4>
						<ul className="flex flex-col gap-y-4">
							{supportList.map((items) => (
								<a href="#">
									{" "}
									<li className="text-secondary font-primary leading-6  ">
										{items.des}
									</li>
								</a>
							))}
						</ul>
					</div>
					<div className="">
						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
							Account
						</h4>
						<ul className="flex flex-col gap-y-4">
							{accountList.map((items) => (
								<a href="#">
									{" "}
									<li className="text-secondary font-primary leading-6  ">
										{items.des}
									</li>
								</a>
							))}
						</ul>
					</div>
					<div className="">
						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
							Quick Link
						</h4>
						<ul className="flex flex-col gap-y-4">
							{quickList.map((items) => (
								<a href="#">
									{" "}
									<li className="text-secondary font-primary leading-6  ">
										{items.des}
									</li>
								</a>
							))}
						</ul>
					</div>
					<div className="max-w-[198px]">
						<h4 className="font-primary mb-6 text-[20px] leading-[28px] text-secondary ">
							Download App
						</h4>
						<p className="text-secondary/70 font-primary font-medium leading-[18px] text-[12px] ">
							Save $3 with App New User Only{" "}
						</p>
						<div className="flex gap-x-2 mt-2">
							<div className="max-w-[80px]">
								<img className="w-full" src={qrcode} alt="#qrcode" />
							</div>
							<div className="flex flex-col justify-around ">
								<div>
									<img className="w-full" src={googleplay} alt="#googleplay" />
								</div>
								<div>
									<img className="w-full" src={applestore} alt="" />
								</div>
							</div>
						</div>
						<div className="flex gap-x-6 mt-6 ">
							<a href="#">
								<FaFacebookF  color="ffffff" size={22} />
							</a>
							<a href="#">
								<FiTwitter color="ffffff" size={22} />
							</a>
							<a href="#">
								<FaInstagram color="ffffff" size={22} />
							</a>
							<a href="#">
								<FaLinkedinIn color="ffffff" size={22} />
							</a>
						</div>
					</div>
				</div>

				<div className="w-full h-[1px] mt-15 bg-[#3d3d3d] "></div>
				<p className="text-center mt-4 font-primary leading-6 text-[#3d3d3d] ">© Copyright yeasin 2024. All right reserved</p>

	  
		</Container>
	</div>
  )
}

export default Footer

