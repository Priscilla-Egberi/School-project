import React, {useEffect} from 'react'
import Search from "../components/Searching";
// import DropDown from "../components/Goods/DropDown"
import Cards from "../components/Cards"
import {Img} from "../data/data"
import axios from 'axios';

function Goods() {
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
    <div> 
        <h2 className="mt-2 md:mt-20 text-2xl semibold md:hidden ml-3 my-3">Goods</h2>
        <div className="md:mx-20 mx-5 md:my-12 g-y-5">
        <Search variant="gradient" size="sm" fullWidth className="mb-5" data={Img}/>
        </div>
        {/* <div className="md:mx-20 mx-5 my-12">
        <DropDown />
        </div> */}
                      <div className="mt-5 mx-3 md:mx-20 grid grid-cols-1 md:grid-cols-4 gap-4 ">
                      {/* {Img.map(goods => (
                                <div key={goods.id}>
                                        <Cards name={goods.name} link={goods.id} condition={goods.condition} amount={goods.amount} detail={goods.imgUrl[0]} className="col-span-1" />
                                </div>
      ))} */}
      {Img.map((item) => (
          <div key={item.id}>
          <Cards link={`${item.id}`} name={item.name} id={item.id} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" />
        </div>
        ))}
                              
                      </div>
       
    </div></>
  )
}

export default Goods