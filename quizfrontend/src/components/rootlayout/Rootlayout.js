import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
export default function home() {
  return (
    <div>
    <Navbar/>
    {/*placeholder to display components dynamically */}
    <Outlet/>
    <Footer/>
</div>
  )
}
