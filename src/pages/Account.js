import React, {useState} from 'react'
import SideBar from "../components/account/SidebarAccount"
import CollasibleSidebar from "../components/account/CollasibleSidebar"
// import Navbar from "../components/account/NavbarAccount"
import { Outlet } from 'react-router-dom'

function Account() {
  const [check, setCheck] = useState('true');
  return (
    <>
        <section className="md:h-screen md:grid grid-cols-6">
              
                                  {/* ----------Sidebar */}
                              <CollasibleSidebar />
                              <div className="hidden md:block col-span-1" >
                                  <SideBar />
                              </div>

                              {/* Routable side of the page */}                    
                              <div className='col-span-5 bg-white'>
                                  {/* <Navbar /> */}
                                  <Outlet check={check} setCheck={setCheck} />
                              </div>   
                              
           
        </section> 
    </>
  )
}

export default Account