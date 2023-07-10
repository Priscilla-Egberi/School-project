import React from 'react'
import SideBar from "../components/account/SidebarAccount"
// import Navbar from "../components/account/NavbarAccount"
import { Outlet } from 'react-router-dom'

function Account() {
  return (
    <>
        <section className="h-screen grid grid-cols-6">
              
                                  {/* ----------Sidebar */}
                              <div className="hidden md:block col-span-1" >
                                  <SideBar />
                              </div>

                              {/* Routable side of the page */}                    
                              <div className='col-span-5 bg-white'>
                                  {/* <Navbar /> */}
                                  <Outlet />
                              </div>   
                              
           
        </section> 
    </>
  )
}

export default Account