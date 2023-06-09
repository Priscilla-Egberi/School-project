import React from 'react'
import firstImage from "../images/Group 34.jpg"

import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'



function Home() {
  console.log(firstImage)
  return (
    <>
      <div className='w-11/12 mx-auto  grid grid-cols-4 gap-16 mt-12 h-auto'>
        {/* ----------Sidebar */}
      <div className="col-span-1" >
        <SideBar />
      </div>

      {/* Routable side of the page */}
      
      <div className='col-span-3 '>

      <Outlet />
      </div>
      
      
    </div>
    
    <div className="h-36"></div>
    </>
    
  )
}

export default Home