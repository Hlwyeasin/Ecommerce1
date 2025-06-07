import React from 'react'
import Container from '../Layout/Container'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <div>
     <Container>
       
        <div className='flex mt-[40px] gap-x-[50px]'>
            <BannerLeft></BannerLeft>
            <BannerRight></BannerRight>
        </div>

     </Container>

    </div>
  )
}

export default Banner
