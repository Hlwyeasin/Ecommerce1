import React from 'react'
import Container from '../../Layout/Container'
import imgDroan1 from '../../assets/3rdPageDronimg01.png';
import imgDroan2 from '../../assets/3rdPageDronimg02.png';
import imgDroan3 from '../../assets/3rdPageDronimg03.png';
import imgDroan4 from '../../assets/3rdPageDronimg04.png';
import imgDroan5 from '../../assets/3rdPageDronimg05.png';

const SingleProduDts = () => {
  return (
    <div className='py-30'>
      <Container>
        <div className='grid grid-cols-12 row'>


             <div className='col-span-2'>
                <img src={imgDroan1} alt="#imgDroan1" />
             </div>


         <div className='col-span-6'>
            <div className='pt-[133px] pb-[152px] px-[27px] bg-gray-100'>
                <img src={imgDroan5} alt="#imgDroan5" />
            </div>
         </div>





         <div className='col-span-4'>jhohwhjsf</div>



        </div>
      </Container>
    </div>
  )
}

export default SingleProduDts
