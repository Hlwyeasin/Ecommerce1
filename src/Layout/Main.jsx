import React from 'react'
import Header from '../Header/Header'
import Navber from '../Navber/Navber'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Main
