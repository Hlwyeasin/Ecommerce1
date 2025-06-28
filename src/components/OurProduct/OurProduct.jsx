import React from 'react';
import Container from '../../Layout/Container';

import { FaRegHeart, FaStarHalfStroke } from 'react-icons/fa6';
import { LiaEyeSolid } from 'react-icons/lia';
import image01 from "../../assets/exProduct.png";
import image02 from "../../assets/exPro02.png";
import image03 from "../../assets/exProi03.png";
import image04 from "../../assets/expro04.png";


const OurProduct = () => {
  return (
    <div className="pb-[122px]">
      <Container>


        <div>
          <div className=" flex items-center">
            <div className="w-[20px] h-[40px] bg-primary rounded"></div>
            <div>
              <p className="font-primary text-primary font-semibold ml-[16px]">
                Our Products
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h3 className="font-secondary text-[36px] font-semibold text-black">
              Explore Our Products
            </h3>
          </div>
        </div>

        {/* card part start */}
        

        <div className='flex justify-between mt-[60px]'>


              <div className=" relative w-[270px]">
            <div className="absolute top-3 right-3 z-[999]">
              <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <FaRegHeart size={22} />
              </div>
              <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <LiaEyeSolid size={22} />
              </div>
            </div>

            <div className="bg-[#F5F5F5] group relative py-[52px] px-[65px] rounded">
              <img src={image01} alt="" />
              <div className='absolute bottom-0 left-0 w-full hidden group-hover:block'>
                <p className='bg-black text-white font-primary font-medium py-2 text-center'>Add To Cart</p>
              </div>
              
            </div>

            <div className="mt-4">
              <p className=" font-primary font-medium">The north coat</p>
              <p className="font-primary font-medium py-2 text-primary">
                $260 <del className="text-[#7D8184]">$360</del>{' '}
              </p>
              <div className="flex items-center">
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <p className="  ml-2 font-primary font-medium text-[#7D8184]">
                  (65)
                </p>
              </div>
            </div>
          </div>

              <div className=" relative w-[270px]">
            <div className="absolute top-3 right-3">
              <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <FaRegHeart size={22} />
              </div>
              <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <LiaEyeSolid size={22} />
              </div>
            </div>

            <div className="bg-[#F5F5F5] py-[52px] px-[65px] rounded">
              {/* <img src={sellingimag} alt="" /> */}
              <img src={image02} alt="" />
              
            </div>

            <div className="mt-4">
              <p className=" font-primary font-medium">The north coat</p>
              <p className="font-primary font-medium py-2 text-primary">
                $260 <del className="text-[#7D8184]">$360</del>{' '}
              </p>
              <div className="flex items-center">
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <p className="  ml-2 font-primary font-medium text-[#7D8184]">
                  (65)
                </p>
              </div>
            </div>
          </div>
              <div className=" relative w-[270px]">
            <div className="absolute top-3 right-3">
              <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <FaRegHeart size={22} />
              </div>
              <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <LiaEyeSolid size={22} />
              </div>
            </div>

            <div className="bg-[#F5F5F5] py-[52px] px-[65px] rounded">
            
              <img src={image03} alt="" />
              
            </div>

            <div className="mt-4">
              <p className=" font-primary font-medium">The north coat</p>
              <p className="font-primary font-medium py-2 text-primary">
                $260 <del className="text-[#7D8184]">$360</del>{' '}
              </p>
              <div className="flex items-center">
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <p className="  ml-2 font-primary font-medium text-[#7D8184]">
                  (65)
                </p>
              </div>
            </div>
          </div>
              <div className=" relative w-[270px]">
            <div className="absolute top-3 right-3">
              <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <FaRegHeart size={22} />
              </div>
              <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                <LiaEyeSolid size={22} />
              </div>
            </div>

            <div className="bg-[#F5F5F5] py-[32px] px-[75px] rounded">
               <img className='w-full' src={image04} alt="" />
              
            </div>

            <div className="mt-4">
              <p className=" font-primary font-medium">The north coat</p>
              <p className="font-primary font-medium py-2 text-primary">
                $260 <del className="text-[#7D8184]">$360</del>{' '}
              </p>
              <div className="flex items-center">
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <FaStarHalfStroke className="text-[#FFAD33]" />
                <p className="  ml-2 font-primary font-medium text-[#7D8184]">
                  (65)
                </p>
              </div>
            </div>
          </div>


        </div>
        

         <div className='text-center mt-[60px]'>
           <button className=' bg-primary text-white font-primary 
            font-medium py-4 px-[48px] text-center rounded' >View All Products</button>
         </div>
        
      </Container>
    </div>
  );
};

export default OurProduct;
