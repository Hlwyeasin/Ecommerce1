import React from 'react'
import Header from '../Header/Header'
import Navber from '../Navber/Navber'
import Banner from '../Banner/Banner'
import Catagories from '../components/Catagori/Catagories'
import Bestselling from '../components/Catagori/Bestselling/Bestselling'
import Offer from '../components/Offer/Offer'
import OurProduct from '../components/OurProduct/OurProduct'

const Home = () => {
  return (
    <>
      <Header></Header>
      <Navber/>
      <Banner></Banner>
      <Catagories></Catagories>
      <Bestselling></Bestselling>
      <Offer></Offer>
      <OurProduct></OurProduct>
  
    </>
  )
}

export default Home;
