import React from 'react'
import SideBar from "../components/account/SidebarAccount"
import Body from "../components/account/BodyAccount"
import Navbar from "../components/account/NavbarAccount"

function Account() {
  return (
    <>
        <Navbar />
        <div className='grid grid-cols-4'>
                            {/* ----------Sidebar */}
                        <div className="col-span-1" >
                            <SideBar />
                        </div>

                        {/* Routable side of the page */}                    
                        <div className='col-span-3 '>
                            <Body />
                        </div>   
                        
        </div>    
    </>
  )
}

export default Account