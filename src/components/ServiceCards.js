import React from 'react'

function ServiceCards({props}) {
  return (
    <div>
        <div className='py-4 border-b-2 border-gray-300'>
       <div className="md:flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src={props.userImg} 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{props.userName}</h1>
                    <p className='font-semibold'>{props.service}</p>
                    <p className='font-semibold text-blue-600'>see resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6">Available</p>
       </div>
       <p className='md:px-16'>{props.description}</p>
    </div>
    </div>
  )
}

export default ServiceCards