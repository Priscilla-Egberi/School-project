import React, {useEffect} from 'react'
import { serviceData } from '../data/service'
import Search from "../components/service/SearchingService";
import Cards from "../components/service/ServiceCards"
import ServiceContext from "../components/context/ServiceContext"
import axios from 'axios';

function Services() {
  const post = React.useContext(ServiceContext)
  
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
        <h2 className="mt-2 md:mt-20 text-2xl semibold md:hidden ml-3 my-3">Services</h2>
        <div className="md:mx-20 mx-5 md:my-12 g-y-5">
        <Search variant="gradient" size="sm" fullWidth className="mb-5" data={serviceData}/>
        </div>
        
    <div className="mx-5 md:mx-10">
    {/* <div className='py-4 border-b-2 border-gray-300'>
       <div className="md:flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Rose Eket</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>09024808188</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6">Not Available</p>
       </div>
       <p className='md:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div> */}
    
    {serviceData.map(item => (
                                <div key={item.id}>
                                  
                                        <Cards 
                                        // Replace 'id' with the unique identifier in your data
                                       cardId={item.id} // Use 'cardId' instead of 'id'
                                       userName={item.name}
                                       service={item.service}              
                                       description={item.description}
                                       userImg={item.img}
                                       className="col-span-1" />

                                    {/* <h3>{goods.title}</h3> */}
                                  
                                </div>
      ))}
    {post.map(item => (
                                <div key={item.pk}>
                                  
                                        <Cards 
                                        // Replace 'id' with the unique identifier in your data
                                       cardId={item.pk} // Use 'cardId' instead of 'id'
                                       userName={item.seller.first_name}
                                       service={item.category.name? item.category.name : ""}              
                                       description={item.description}
                                       userImg={item.seller.profile_image}
                                       className="col-span-1" />

                                    {/* <h3>{goods.title}</h3> */}
                                  
                                </div>
      ))}
       
    </div>
    </>
  )
}

export default Services