import React from 'react'
import Service01 from '../Svg/Service01'
import Service02 from '../Svg/Service02'
import Service03 from '../Svg/service03'
import Container from '../../Layout/Container'
const Service = () => {
      const serviceList = [
    {
      image : <Service01 /> ,
      title:"FREE AND FAST DELIVERY",
      description:"Free delivery for all orders over $140",
    },
    {
      image :  <Service02 />  ,
      title:"24/7 CUSTOMER SERVICE",
      description:"Friendly 24/7 customer support",
    }, 
    {
      image : <Service03 />   ,
      title:"MONEY BACK GUARANTEE",
      description:"We reurn money within 30 days",
    },
  ]
  return (
    <div  className='pt-[182px] pb-[167px]'>
      <Container>
        <div className='pl-[120px] pr-[107px] '>
         <div className='flex justify-between '>
          {serviceList.map((item)=>(
            <div className='text-center'>
              <div className='flex justify-center'>{item.image}</div>
              <h3 className='font-primary font-semibold text-[20px] leading-[28px] text-black mt-6  mb-2'>{item.title}</h3>
              <p className='font-primary text-sm leading-[21px] text-black '>{item.description}</p>
            </div>
          ))}
        </div>
       </div>
      </Container>
    </div>
  )
}

export default Service
