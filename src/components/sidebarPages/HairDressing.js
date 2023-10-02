import React from 'react'
import Cards from "../service/ServiceCards"
import {serviceData} from "../../data/service"
// import { Link } from 'react-router-dom';

function HairDressing() {
  const filteredDressing = serviceData.filter((item) => item.category === 'Hair Dressing');
console.log(filteredDressing);
  return (
    <>
    
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Hair Dressing</h2>

    <div className="mt-6  ">
        {filteredDressing.map((item) => (
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
    </div>
  </div>
    </div>


    
      
  
    </>
  )
}

export default HairDressing