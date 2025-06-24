import React from 'react'
import Container from '../../Layout/Container'
import arivalimge01 from "../../assets/arivalimage01.png";
import arivalimge02 from "../../assets/arivalimage02.png";
import arivalimg03 from "../../assets/arival img03.png";
import arivalimg04 from "../../assets/arivalimg04.png";

const Arival = () => {
  return (
    <div className="pb-[122px]">
     <Container>


{/* arival part 01 */}
<div>
 <div>
          <div className=" flex items-center">
            <div className="w-[20px] h-[40px] bg-primary rounded"></div>
            <div>
              <p className="font-primary text-primary font-semibold ml-[16px]">
               Featured
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h3 className="font-secondary text-[36px] font-semibold text-black">
             New Arrival
            </h3>
          </div>
        </div>
</div>
  
  {/* arival part02 */}


  <div className='mt-[60px]'>
 

  <div className='flex gap-[32px]'>
    <div>
  <img src={arivalimge01} alt="#aarivalimge02rivalimge01" />

  </div>
  <div className=''>
   <img src={arivalimge02} alt="#arivalimge02" />
    <div  className='mt-[30px] flex gap-[32px]'>
        <img src={arivalimg03} alt="#arivalimg03" />
        <div>
            <img src={arivalimg04} alt="arivalimg04" />
        </div>
    </div>

  </div>


  </div>


  </div>





     </Container>
    </div>
  )
}

export default Arival
