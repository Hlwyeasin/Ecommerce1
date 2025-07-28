import React from 'react'

const ProductLfPart = () => {
  const catagoriesData = [
    {
      name: "Woman’s Fashion "
    },
    {
      name: "Men’s Fashion"
    },
    {
      name: "Electronics"
    },
    {
      name: "Home & Lifestyle"
    },
    {
      name: "Medicine"
    },

    {
      name: "Sports & Outdoor"
    },
    {
      name: "Baby’s & Toys"
    },
    {
      name: "Groceries & Pets"
    },
    {
      name: "Health & Beauty"
    }

  ];

  return (
    <div>
      <h2 className='font-primary font-bold  text-[20px]'>Shop by Category</h2>
      <div className='mt-[15px]'>
        {
          catagoriesData.map((category) => (
            <p className='font-primary mb-4'>{category.name}</p>
          ))
        }
      </div>
      <h2 className='font-primary font-bold  text-[20px]'>Shop by Color</h2>
      <div className='mt-[15px]'>


        <div className='flex items-center mb-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#000000]'></div>
          <p className='ml-[10px] font-primary'>Color 1</p>
        </div>
        <div className='flex items-center mb-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#4400ff]'></div>
          <p className='ml-[10px] font-primary'>Color 1</p>
        </div>
        <div className='flex items-center mb-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-green-400'></div>
          <p className='ml-[10px] font-primary'>Color 1</p>
        </div>



      </div>

    </div>
  )
}

export default ProductLfPart




// chat gpt code :2###################################################################

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductLfPart = () => {
//   // Category labels and API category mapping
//   const categoriesData = [
//     { label: "Woman’s Fashion", apiCategory: "womens-dresses" },
//     { label: "Men’s Fashion", apiCategory: "mens-shirts" },
//     { label: "Electronics", apiCategory: "smartphones" },
//     { label: "Home & Lifestyle", apiCategory: "home-decoration" },
//     { label: "Medicine", apiCategory: "fragrances" },
//     { label: "Sports & Outdoor", apiCategory: "groceries" },
//     { label: "Baby’s & Toys", apiCategory: "furniture" },
//     { label: "Groceries & Pets", apiCategory: "groceries" },
//     { label: "Health & Beauty", apiCategory: "skincare" },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [products, setProducts] = useState([]);

//   // Fetch products whenever selectedCategory changes
//   useEffect(() => {
//     if (selectedCategory) {
//       axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
//         .then(response => {
//           setProducts(response.data.products);
//         })
//         .catch(error => {
//           console.error('Error fetching products:', error);
//         });
//     }
//   }, [selectedCategory]);

//   return (
//     <div className='p-4'>
//       <h2 className='font-primary font-bold text-[20px]'>Shop by Category</h2>
//       <div className='mt-[15px]'>
//         {
//           categoriesData.map((category, index) => (
//             <p
//               key={index}
//               className='font-primary mb-4 cursor-pointer text-blue-600 hover:underline'
//               onClick={() => setSelectedCategory(category.apiCategory)}
//             >
//               {category.label}
//             </p>
//           ))
//         }
//       </div>

//       <h2 className='font-primary font-bold text-[20px] mt-6'>Products</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
//         {
//           products.length > 0 ? (
//             products.map(product => (
//               <div key={product.id} className='border p-4 rounded shadow'>
//                 <img src={product.thumbnail} alt={product.title} className='w-full h-[150px] object-cover rounded' />
//                 <h3 className='font-bold mt-2'>{product.title}</h3>
//                 <p className='text-sm text-gray-600'>${product.price}</p>
//               </div>
//             ))
//           ) : selectedCategory ? (
//             <p>Loading products...</p>
//           ) : (
//             <p>Please select a category to view products.</p>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default ProductLfPart;

// chat gpt code :2###################################################################




// chatgpt  3 code::##############################################################

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductLfPart = () => {
//   const categoriesData = [
//     { name: "Woman’s Fashion", apiCategory: "womens-dresses" },
//     { name: "Men’s Fashion", apiCategory: "mens-shirts" },
//     { name: "Electronics", apiCategory: "smartphones" },
//     { name: "Home & Lifestyle", apiCategory: "home-decoration" },
//     { name: "Medicine", apiCategory: "fragrances" },
//     { name: "Sports & Outdoor", apiCategory: "groceries" },
//     { name: "Baby’s & Toys", apiCategory: "furniture" },
//     { name: "Groceries & Pets", apiCategory: "groceries" },
//     { name: "Health & Beauty", apiCategory: "skincare" }
//   ];

//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (selectedCategory) {
//       axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
//         .then(response => {
//           setProducts(response.data.products);
//         })
//         .catch(error => {
//           console.error("Error fetching products:", error);
//         });
//     }
//   }, [selectedCategory]);

//   return (
//     <div className="p-4">
//       <h2 className="font-primary font-bold text-[20px]">Shop by Category</h2>
//       <div className="mt-[15px]">
//         {categoriesData.map((category, index) => (
//           <p
//             key={index}
//             className="font-primary mb-4 cursor-pointer text-blue-600 hover:underline"
//             onClick={() => setSelectedCategory(category.apiCategory)}
//           >
//             {category.name}
//           </p>
//         ))}
//       </div>

//       <h2 className="font-primary font-bold text-[20px] mt-6">Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//         {products.length > 0 ? (
//           products.map(product => (
//             <div key={product.id} className="border p-4 rounded shadow">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-[150px] object-cover rounded"
//               />
//               <h3 className="font-bold mt-2">{product.title}</h3>
//               <p className="text-sm text-gray-600">${product.price}</p>
//             </div>
//           ))
//         ) : selectedCategory ? (
//           <p>Loading products...</p>
//         ) : (
//           <p>Please select a category to view products.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductLfPart;
// #################################################################################################
