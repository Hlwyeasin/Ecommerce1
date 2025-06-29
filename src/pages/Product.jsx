import React from 'react'
import Container from '../Layout/Container'
import ProductLfPart from '../components/ProductPage/ProductLfPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  return (
    <Container>

      <div className='py-30 flex'>

        <div className='w-[30%]'> <ProductLfPart /></div>
        <div className='w-[70%]'> <ProductRightPart /></div>

      </div>
    </Container>
  )
}

export default Product
