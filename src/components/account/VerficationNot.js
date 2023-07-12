import { Button } from '@material-tailwind/react'
import React, {useContext} from 'react'
import {FaUserTimes} from "react-icons/fa"
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';


function VerficationNot() {

  const [check, setCheck] = useContext(CheckContext)

  function handleChange() {
    setCheck(prevCheck => !prevCheck);
  }

  return (
    <div>
      <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>
        Verification
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-sm p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-6'>
                <FaUserTimes size={32} />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Your account is currently not verified</h1>
            <p className="text-center">You cannot sell on this platform without verifying your account as a student.<br/>Please providethe necessary requirements to indicate that you are a student of university of Uyo</p>
                <Button className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-white bg-my-orange"> Verify your account</Button>
        </div>
       
      </div>
  )
}

export default VerficationNot