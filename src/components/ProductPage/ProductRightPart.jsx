import React, { useEffect, useState } from 'react'

import { FaRegHeart, FaStarHalfStroke } from 'react-icons/fa6';
import { LiaEyeSolid } from 'react-icons/lia';
import ProductRating from './ProductRating';



const ProductRightPart = () => {
  const [productData, setProducData] = useState([])

   useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>setProducData(data.products)
    )

   },[])
  
   

  return (
    <div>
       <div className='flex justify-between mt-[60px] flex-wrap'>

        {
          productData.map((product)=>
                   <div className=" relative w-[270px] mb-[20px]">
                 <div className="absolute top-3 right-3 z-[999]">
                   <div className="w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                     <FaRegHeart size={22} />
                   </div>
                   <div className=" mt-2 w-[34px] h-[34px] rounded-full bg-white-400 flex justify-center items-center">
                     <LiaEyeSolid size={22} />
                   </div>
                 </div>
     
                 <div className="bg-[#F5F5F5] group relative py-[52px] px-[65px] rounded">
                   <img src={product.thumbnail} alt="" />
                   <div className='absolute bottom-0 left-0 w-full hidden group-hover:block'>
                     <p className='bg-black text-white font-primary font-medium py-2 text-center'>Add To Cart</p>
                   </div>
                   
                 </div>
     
                 <div className="mt-4">
                   <p className=" font-primary font-medium">The north coat</p>
                   <p className="font-primary font-medium py-2 text-primary">
                     ${product.price} <del className="text-[#7D8184]">$360</del>{' '}
                   </p>
                   {/* <div className="flex items-center">
                     <FaStarHalfStroke className="text-[#FFAD33]" />
                     <FaStarHalfStroke className="text-[#FFAD33]" />
                     <FaStarHalfStroke className="text-[#FFAD33]" />
                     <FaStarHalfStroke className="text-[#FFAD33]" />
                     <FaStarHalfStroke className="text-[#FFAD33]" />
                     <p className="  ml-2 font-primary font-medium text-[#7D8184]">
                       ({product.rating})
                     </p>
                   </div> */}
                   <div>
                    <ProductRating rating={product.rating}/>
                    <p>{product.reviews.length}</p>
                   </div>
                 </div>
               </div>
          )
        }
  


             </div>
    </div>
  )
}

export default ProductRightPart

