import React from 'react'
import firstImage from "../images/Group 34.jpg"
import CollapsibleSidebar from "../components/CollapsibleSidebar"
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
import Navbar from "../components/landing/Navbar"



function Home() {
  console.log(firstImage)
  return (
    <>
    <Navbar />
    <CollapsibleSidebar />
      <div className='w-11/12 mx-auto  md:grid grid-cols-4 gap-16 mt-2 md:mt-12 h-auto'>
                {/* ----------Sidebar */}
              <div className="hidden md:block col-span-1" >
                <SideBar />
              </div>

              {/* Routable side of the page */}      
              <div className='col-span-3 pt-5 md:pt-0'>
              <Outlet />
              </div> 
    </div>
    
    <div className="h-36"></div>
    <Footer />
    </>
    
  )
}

export default Home