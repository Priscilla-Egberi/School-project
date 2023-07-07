import React from 'react'
import {FaUserCheck} from "react-icons/fa"

function Verified() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Verification</p>
      
        <div className="mx-auto mt-14 max-w-sm p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-6'>
            <FaUserCheck />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Verified</h1>
            <p className="text-center">Your Account is Currently verified</p>
            
        </div>
       
      </div>
  )
}

export default Verified