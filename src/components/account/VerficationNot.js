import { Button } from '@material-tailwind/react'
import React from 'react'

function VerficationNot() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Verification</p>
      
        <div className="mt-14 max-w-xs p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-3'>
            <img src='https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Your account is currently not verified</h1>
            <p className="text-center">You cannot sell on this platform without verifying your account as a student.<br/>Please providethe necessary requirements to indicate that you are a student of university of Uyo</p>
            <Button className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-my-orange bg-my-orange"> <AiOutlinePlus className="mr-2" /> Verify your account</Button>
        </div>
       
      </div>
  )
}

export default VerficationNot