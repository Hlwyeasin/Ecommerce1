import React from 'react'
import Container from '../../../Layout/Container';
import sellingimag from "../../../assets/selling image  1.png";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import selligimage2 from "../../../assets/selling imag2.png";
import sellingimage03 from "../../../assets/selling imge03.png";
import sellingimge04 from "../../../assets/selling image04.png";

const Bestselling = () => {
    return (
        <div className='pb-[122px]'>
            <Container>
                <div className='border-t border-gray-500  pt-[27px]'>

                    <div className=' flex items-center'>
                        <div className='w-[20px] h-[40px] bg-primary rounded'></div>
                        <div>
                            <p className='font-primary text-primary font-semibold ml-[16px]'>This Month</p>
                        </div>
                    </div>


                </div>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <h3 className="font-secondary text-[36px] font-semibold text-black">
                            Best Selling Products
                        </h3>
                        <div>
                            <button className='bg-primary font-primary text-medium py-3 px-12 text-white rounded'>View All</button>
                        </div>
                    </div>
                </div>


                {/* card part  */}

                <div className='flex justify-between mt-[60px]'>

                    <div className=' relative w-[270px]'>

                        <div className='absolute top-3 right-3'>
                            <div className='w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <FaRegHeart size={22} />

                            </div>
                            <div className=' mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <LiaEyeSolid size={22} />

                            </div>

                        </div>

                        <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                            <img src={sellingimag} alt="" />
                        </div>


                        <div className='mt-4'>
                            <p className=' font-primary font-medium'>The north coat</p>
                            <p className='font-primary font-medium py-2 text-primary'>$260 <del className='text-[#7D8184]'>$360</del>   </p>
                            <div className='flex items-center'>
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <p className='  ml-2 font-primary font-medium text-[#7D8184]'>(65)</p>
                            </div>

                        </div>








                    </div>

                    <div className=' relative w-[270px]'>

                        <div className='absolute top-3 right-3'>
                            <div className='w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <FaRegHeart size={22} />

                            </div>
                            <div className=' mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <LiaEyeSolid size={22} />

                            </div>

                        </div>

                        <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                            <img src={selligimage2} alt="" />
                        </div>


                        <div className='mt-4'>
                            <p className=' font-primary font-medium'>Gucci duffle bag</p>
                            <p className='font-primary font-medium py-2 text-primary'>$960 <del className='text-[#7D8184]'>$1160</del>   </p>
                            <div className='flex items-center'>
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <p className='  ml-2 font-primary font-medium text-[#7D8184]'>(65)</p>
                            </div>

                        </div>








                    </div>

                    <div className=' relative w-[270px]'>

                        <div className='absolute top-3 right-3'>
                            <div className='w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <FaRegHeart size={22} />

                            </div>
                            <div className=' mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <LiaEyeSolid size={22} />

                            </div>

                        </div>

                        <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                            <img src={sellingimage03} alt="" />
                        </div>


                        <div className='mt-4'>
                            <p className=' font-primary font-medium'>RGB liquid CPU Cooler</p>
                            <p className='font-primary font-medium py-2 text-primary'>$160 <del className='text-[#7D8184]'>$170</del>   </p>
                            <div className='flex items-center'>
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <p className='  ml-2 font-primary font-medium text-[#7D8184]'>(65)</p>
                            </div>

                        </div>








                    </div>

                    <div className=' relative w-[270px]'>

                        <div className='absolute top-3 right-3'>
                            <div className='w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <FaRegHeart size={22} />

                            </div>
                            <div className=' mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center'>
                                <LiaEyeSolid size={22} />

                            </div>

                        </div>

                        <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                            <img src={sellingimge04} alt="" />
                        </div>


                        <div className='mt-4'>
                            <p className=' font-primary font-medium'>Small BookSelf</p>
                            <p className='font-primary font-medium py-2 text-primary'>$360 </p>
                            <div className='flex items-center'>
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <FaStarHalfStroke className='text-[#FFAD33]' />
                                <p className='  ml-2 font-primary font-medium text-[#7D8184]'>(65)</p>
                            </div>

                        </div>








                    </div>

                </div>


            </Container>


        </div>
    )
}

export default Bestselling
