import React from 'react'

const ProductLfPart = () => {
  const catagoriesData = [
    {
      name: "Woman’s Fashion"
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
          <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
          <p className='ml-[10px] font-primary'>Color 1</p>
        </div>
        <div className='flex items-center mb-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
          <p className='ml-[10px] font-primary'>Color 1</p>
        </div>
        


      </div>

    </div>
  )
}

export default ProductLfPart
