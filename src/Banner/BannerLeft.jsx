import React from 'react'

const BannerLeft = () => {
    const catagoriesData =[
        {
            name:"Woman’s Fashion"
        },
        {
            name:"Men’s Fashion"
        },
         {
            name:"Electronics"
         },
         {
             name:"Home & Lifestyle"
         },
         {
            name:"Medicine"
         },

         {
            name:"Sports & Outdoor"
         },
         {
             name:"Baby’s & Toys"
         },
          {
            name:"Groceries & Pets"
          },
          {
            name:"Health & Beauty"
          }
        





    ]
  return (
    <div className='w-[20%] bg-pink-300'>
       {
        catagoriesData.map((category)=>(
            <p className='font-primary mb-4'>{category.name}</p>
        ))
       }
    </div>
  )
}

export default BannerLeft
