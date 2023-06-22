import React from 'react';
import { GoVerified} from "react-icons/go";
import { AiOutlineUserAdd, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import {BsBagDash} from "react-icons/bs";
import {RiHandCoinLine} from "react-icons/ri";
import {IoStatsChartOutline} from "react-icons/io5";
import {Link} from "react-router-dom"




function SideBar() {
  return (
    <section className='font-semibold h-full bg-white flex flex-col justify-between border-r-gray border-2'>
        <div>
              <div id="title" className="flex flex-row items-center text-white p-2  h-16" style={{backgroundColor:"#EB6B39"}}> <AiOutlineUserAdd className="mr-2"/> Account</div>
              <Link to="/account/additems"  className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-my-orange bg-my-lightorange"> <AiOutlinePlus className="mr-2" /> Add New Item</Link>
              <div className="mt-3 px-4  flex flex-col gap-y-6 ">        
                  <Link to="/account" className="flex items-center"><AiOutlineUser className="mr-2"/> My Profile</Link>
                  <Link to="/account/goods" className="flex items-center"><BsBagDash  className="mr-2"/> My Goods</Link>
                  <p className="flex items-center"><RiHandCoinLine className="mr-2"/> My Services</p>
                  <p className="flex items-center"><IoStatsChartOutline className="mr-2"/> Insights</p>
                  <p className="flex items-center"><GoVerified className="mr-2"/> Verification</p>
              </div>
        </div>

        <div>
            <hr className='w-full'/>
            <h1 className=" flex flex-row items-center justify-center py-3 text-my-orange bg-my-lightorange">log out</h1>
        </div>

        
    </section>
  )
}

export default SideBar