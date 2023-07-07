import { Button } from '@material-tailwind/react'
import React from 'react'
import {FaUserTimes} from "react-icons/fa"


function VerficationNot() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Verification</p>
      
        <div className="mx-auto mt-14 max-w-sm p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-6'>
            <FaUserTimes />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Your account is currently not verified</h1>
            <p className="text-center">You cannot sell on this platform without verifying your account as a student.<br/>Please providethe necessary requirements to indicate that you are a student of university of Uyo</p>
            <Button className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-white bg-my-orange"> Verify your account</Button>
        </div>
       
      </div>
  )
}

export default VerficationNot