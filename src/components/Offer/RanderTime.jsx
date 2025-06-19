import React from 'react'

const RanderTime = ({ hours,days, minutes, seconds }) => {
  return (
    <div className='flex gap-x-6 mt-[62px] ml-[56px] mb-[40px]'>

      <div className='text-black font-bold w-[62px] h-[62px] bg-white rounded-full
       flex flex-col justify-center items-center px-[14px] py-[15px]'> 

      <p className='font-primary font-semibold'> {hours} </p> 
      <p className='font-primary text-[11px]'>Hours</p>

       </div>
      <div className='text-black-600 w-[62px] h-[62px] bg-white rounded-full
       flex flex-col justify-center items-center px-[14px] py-[15px]'> 

      <p className='font-primary font-semibold'> {days} </p> 
      <p className='font-primary text-[11px]'>Days</p>

       </div>
      <div className='text-black-600 w-[62px] h-[62px] bg-white rounded-full
       flex flex-col justify-center items-center px-[14px] py-[15px]'> 

      <p className='font-primary font-semibold'> {minutes} </p> 
      <p className='font-primary text-[11px]'>Minutes</p>

       </div>
      <div className='text-black-600 w-[62px] h-[62px] bg-white rounded-full
       flex flex-col justify-center items-center px-[14px] py-[15px]'> 

      <p className='font-primary font-semibold'> {seconds} </p> 
      <p className='font-primary text-[11px]'>Seconds</p>

       </div>


    
      
     
    
    </div>
  )
}

export default RanderTime
