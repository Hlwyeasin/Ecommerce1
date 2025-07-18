

import React, { useEffect, useState } from "react";
import imgDroan1 from "../../assets/3rdPageDronimg01.png";
import imgDroan2 from "../../assets/3rdPageDronimg02.png";
import imgDroan3 from "../../assets/3rdPageDronimg03.png";
import imgDroan4 from "../../assets/3rdPageDronimg04.png";
import imgDroan5 from "../../assets/3rdPageDronimg05.png";
import Container from "../../Layout/Container";
import { useParams } from "react-router";
import Product from "../../pages/Product";
import SingleProdRating from "./SingleProdRating";
import {useDispatch} from "react-redux"
import { cartTotal } from "../../Slices/cartSlice";
 import { Bounce, ToastContainer, toast } from 'react-toastify';

const SingleProduDts = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch()
  
  const [productData, setProducData] = useState([]);
  const [selectedImg, setSeletedImg] = useState()
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducData(data.products));
  }, []);

  const singleProduct = productData.find((Product) => Product.id == id);

  useEffect(()=>{
       if (singleProduct?.thumbnail) {
        setSeletedImg(singleProduct?.thumbnail)
        
       }
  },[singleProduct])
  const handleAddToCart = (product) =>{
    dispatch(cartTotal(product))
    toast.success("add to chart")
    
  }

  return (
    <div className="py-30">
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
      <Container>
        <div className="grid grid-cols-12 row space-x-4">
          <div className="col-span-2">
            <div className="flex flex-col gap-y-4">


              {/* <div className="py-3 px-6 bg-gray-100 rounded">
                 <img onClick={()=> setSeletedImg (imgDroan1)} src={imgDroan1} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img onClick={()=> setSeletedImg (imgDroan2)} src={imgDroan2} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img onClick={()=>setSeletedImg (imgDroan3)} src={imgDroan3} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img onClick={()=> setSeletedImg (imgDroan4)} src={imgDroan4} alt="#imgDroan1" />
              </div>  */}

              {
                singleProduct?.images.map((img)=>(
                  <div className="py-3 px-6 bg-gray-100 rounded">
                <img onClick={()=>setSeletedImg(img)} src={img} alt="" />
              </div>

                ))
              }
            </div>


          </div>

          <div className="col-span-6">
            <div className="pt-[133px] pb-[152px] px-[20px] bg-gray-100 rounded">
              <img className="h-[400px] object-contain mx-auto" src={selectedImg} alt="" />
            </div>
          </div>

          {/* product writing part div which is product show more deatios in writing */}

          <div className="col-span-4">
            <h2 className="font-secondary font-semibold text-[24px]">
              {singleProduct?.title}
            </h2>
            <div className="flex items-center gap-x-5 mb-4">
              <SingleProdRating rating={singleProduct?.rating}/>
              <p className="font-primary">({singleProduct?.reviews.length} Reviews)
                 | <span className="text-[#00FF66] ml-3 ">In Stock</span> </p>
            </div>
            <p className="font-secondary  text-[24px] mb-6">
              ${singleProduct?.price}
            </p>
            <p className="font-primary mb-[24px]">{singleProduct?.description}</p>
            <div className="border-1 border-b"></div>
             <button onClick={()=>handleAddToCart (singleProduct)} className="mt-10 py-4 px-[60px] bg-primary
              text-white font-primary font-semibold rounded-lg cursor-pointer">Add to cart</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduDts;


// ################################ chat gpt code here #######################################################
// import React, { useEffect, useState } from "react";
// import Container from "../../Layout/Container";
// import { useParams } from "react-router";

// const SingleProduDts = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState([]);
//   const [selectedImg, setSelectedImg] = useState(null);

//   // Fetch all products
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProductData(data.products));
//   }, []);

//   // Find the selected product
//   const singleProduct = productData.find(
//     (product) => product.id === Number(id)
//   );

//   // When singleProduct is available, set default selected image
//   useEffect(() => {
//     if (singleProduct?.images?.length > 0) {
//       setSelectedImg(singleProduct.images[0]);
//     }
//   }, [singleProduct]);

//   // If data isn't ready, show loading
//   if (!singleProduct) return <div className="text-center py-20">Loading...</div>;

//   return (
//     <div className="py-30">
//       <Container>
//         <div className="grid grid-cols-12 gap-4">
//           {/* Thumbnails */}
//           <div className="col-span-2">
//             <div className="flex flex-col gap-y-4">
//               {singleProduct.images.map((img, index) => (
//                 <div
//                   key={index}
//                   className="py-3 px-5 bg-[#F5F5F5] rounded cursor-pointer hover:ring-2 hover:ring-blue-400"
//                   onClick={() => setSelectedImg(img)}
//                 >
//                   <img src={img} alt={`thumb-${index}`} className="w-full h-auto" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Main Image */}
//           <div className="col-span-6">
//             <div className="pt-[133px] pb-[152px] px-[20px] bg-gray-100 rounded">
//               <img
//                 className="h-[400px] object-contain mx-auto"
//                 src={selectedImg}
//                 alt="Selected product"
//               />
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="col-span-4">
//             <h2 className="font-secondary font-semibold text-[24px] mb-2">
//               {singleProduct.title}
//             </h2>
//             <p className="font-secondary text-[24px] mb-6">
//               ${singleProduct.price}
//             </p>
//             <p className="font-primary text-gray-700">
//               {singleProduct.description}
//             </p>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SingleProduDts;

// ################################ chat gpt code here end #######################################################
