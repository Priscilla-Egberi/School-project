import React, {useEffect} from 'react'
import CollapsibleSidebar from "../components/CollapsibleSidebar"
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
import Navbar from "../components/home/NavbarHome"
import axios from 'axios'



function Home() {
  useEffect(() => {
    const refreshAccessToken = async () => {
      const refresh_token = localStorage.getItem('refresh_token');
      if (refresh_token) {
        try {
          // Send a refresh request to get a new access token
          const response = await axios.post('https://campus-buy.onrender.com/api/token/refresh/', {"refresh": refresh_token });
          localStorage.setItem('access_token', response.data.access);
		console.log('token has been refreshed')
        } catch (error) {
          // Handle refresh token error (e.g., if refresh token has expired)
          // You may want to redirect the user to the login page or handle it in another way
          console.error('Error refreshing access token:', error);
        }
      }
    };
    // Refresh the token every minute (adjust the interval as needed)
    const tokenRefreshInterval = setInterval(refreshAccessToken, 6 * 1000); // 60 seconds * 1000 milliseconds
    // Cleanup the interval when the component unmounts
    return () => clearInterval(tokenRefreshInterval);
  }, []); // Empty dependency array means this effect runs once when the component mounts


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