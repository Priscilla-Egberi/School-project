import React from 'react'
import SideBar from "../components/account/SidebarAccount"
import Body from "../components/account/BodyAccount"
import Navbar from "../components/account/NavbarAccount"

function Account() {
  return (
    <>
        <section className="h-screen grid grid-cols-6">
              
                                  {/* ----------Sidebar */}
                              <div className="col-span-1" >
                                  <SideBar />
                              </div>

                              {/* Routable side of the page */}                    
                              <div className='col-span-5 '>
                              <Navbar />
                                  <Body />
                              </div>   
                              
           
        </section> 
    </>
  )
}

export default Account