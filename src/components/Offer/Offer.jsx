import React from 'react'
import Container from '../../Layout/Container';
import Countdown from 'react-countdown';
import RanderTime from './RanderTime';

const Offer = () => {
  return (
    <div className='pt-[122px] pb-[161px]'>
<Container>
    <div className='bg-[url(./assets/offerbackground.png)] w-[1170px] h-[500px] mt-[172px] bg-cover bg-no-repeat bg-center mb-[161px]'>
            
        <div>
            <p className='font-primary text-[#00FF66] font-semibold  pt-[69px] ml-[56px]'>Categories</p>
            <h3 className='W-[44px] font-secondary 
            text-[48px] font-semibold text-white leading-[60px]
             traking-[4%] w-[443px] h-[120px]  ml-[56px] pt-[32px]  '>Enhance Your Music Experience</h3>
              <div>
                <Countdown date={Date.now() + 100000000} 
                renderer={RanderTime}
                 />,
              </div>

              <div>
                <button className='bg-[#00FF66] rounded-[4px] pt-[6px] gap-[10px]
                 w-[171px] h-[56px] ml-[56px] text-black leading-[24px]
                  tex-[16px] font-primary  mt-[-18px]'>Buy Now!</button>
              </div>
           
        </div>
      
    </div>
    
    
</Container>
    </div>
  )
}

export default Offer
