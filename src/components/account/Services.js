import React, {useContext} from 'react'
import CheckContext from './CheckContext';
import { FaBars } from "react-icons/fa";
import ServiceCard from './ServiceCard';
import ServiceContext from "../context/ServiceContext"


function Services() {
  const post = React.useContext(ServiceContext)
  const [check, setCheck] = useContext(CheckContext)

  function handleChange() {
    setCheck(prevCheck => !prevCheck);
  }

  return (
    <div>
    <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>Services
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>    
    </div>

    <div className="mx-5 md:mx-44">

    {post.map(item => (
                                <div key={item.pk}>
                                  
                                        <ServiceCard 
                                        // Replace 'id' with the unique identifier in your data
                                       cardId={item.pk} // Use 'cardId' instead of 'id'
                                       first_name={item.seller.first_name}
                                       last_name={item.seller.last_name}
                                       service={item.category.name? item.category.name : ""}              
                                       description={item.description}
                                       detail={item.seller.profile_image}
                                       className="col-span-1" />

                                    {/* <h3>{goods.title}</h3> */}
                                  
                                </div>
      ))}   
  
    
    

    
    </div>

    {/* <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <p className='border-b-2 border-my-orange'>Available</p>
                <p>Not-available</p>
            </div>
            <div className="md:grid grid-cols-2 gap-x-14">            
            <Card />           
            <Card />           
            <Card />           
            <Card />           
            <Card />
            </div>
        </div> */}
    </div>







   
  )
}

export default Services