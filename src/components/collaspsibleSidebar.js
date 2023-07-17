import React, {useContext} from 'react';
import { GoVerified } from "react-icons/go";
import { AiOutlineUserAdd, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import {BsBagDash} from "react-icons/bs";
import {RiHandCoinLine} from "react-icons/ri";
import {IoStatsChartOutline, IoClose} from "react-icons/io5";
import {Link} from "react-router-dom"
import CheckHomContext from './CheckHomContext';



function SideBar() {
  const [checks, setChecks] = useContext(CheckHomContext)

  // function handleChange() {
  //   setCheck(true);
  // }

  return (
    <section onClick={()=>{setChecks(true)}}  id="openSidebarHere" className={`side-bar md:hidden ${checks? "":'openSidebar'} font-semibold h-full bg-white flex flex-col justify-between border-r-gray border-2`}>
        <div>
              <div id="title" className="flex flex-row items-center justify-between text-white pl-4 py-3 text-xl font-bold tracking-tight" style={{backgroundColor:"#EB6B39"}}> <p className='flex'><AiOutlineUserAdd className="mr-2"/> Account</p>
              <div className="inline">
                <IoClose size={32} className="ml-3  lg:hidden" id="openSidebar"/>
            </div>
              </div>
              <Link to="/account/additems"  className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-my-orange bg-my-lightorange"> <AiOutlinePlus className="mr-2" /> Add New Item</Link>
              <div className="mt-3 px-4  flex flex-col gap-y-6 ">        
                  <Link to="/account" className="flex items-center"><AiOutlineUser className="mr-2"/> My Profile</Link>
                  <Link to="/account/goods" className="flex items-center"><BsBagDash  className="mr-2"/> My Goods</Link>
                  <Link to="/account/services" className="flex items-center"><RiHandCoinLine className="mr-2"/> My Services</Link>
                  <Link className="flex items-center"><IoStatsChartOutline className="mr-2"/> Insights</Link>
                  <Link to="/account/verification" className="flex items-center"><GoVerified className="mr-2"/> Verification</Link>
              </div>
        </div>
          
        <div>
            <hr className='w-full'/>
            <h1 className=" flex flex-row items-center justify-center py-3 text-my-orange bg-my-lightorange">LOG OUT</h1>
        </div>

        
    </section>
  )
}

export default SideBar