import React from 'react';
import Dropdown from './ServiceDropdown'


function ServiceCard({first_name, last_name, service, description, detail}) {
  return (
    <div className='py-4 border-b-2 border-gray-300'>
       <div className="flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src={detail} 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{first_name}{last_name}</h1>
                    <p className='font-semibold'>{service}</p>
                    <p className='font-semibold text-gray-600'>See resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6"><Dropdown /></p>
       </div>
       <p className='md:px-16'>{description}</p>
    </div>
  )
}

export default ServiceCard