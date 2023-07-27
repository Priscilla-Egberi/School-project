import React, {useContext} from 'react';
import logo from "../images/logo.jpg";
import {GiPencilRuler, GiComputerFan} from "react-icons/gi";
import {MdComputer} from "react-icons/md";
import {IoShirtOutline, IoClose} from "react-icons/io5";
import {CgGirl} from "react-icons/cg";
import {TbDotsCircleHorizontal} from  "react-icons/tb";
import {CiForkAndKnife} from "react-icons/ci";
import {BiBookBookmark} from "react-icons/bi";
import {TfiPaintRoller} from "react-icons/tfi";
import {TiScissorsOutline} from "react-icons/ti";
import {Link} from "react-router-dom"
import CheckHomContext from './CheckHomContext';



function SideBar() {
  const [checks, setChecks] = useContext(CheckHomContext)
  

  return (
    <section onClick={()=>{setChecks(true)}}  id="openSidebarHere" className={`side-bar md:hidden ${checks? "":'openSidebar'} font-semibold h-full bg-white flex flex-col justify-between border-r-gray border-2`}>
        <div>
              <div id="title" className="flex flex-row items-center justify-between pl-4 py-3 text-xl font-bold tracking-tight"> 
              <p className='flex'>CampusBuy <img src={logo} alt="logo" className='ml-3 inline w-6' /></p>
              <div className="inline">
                <IoClose size={32} className="ml-3  lg:hidden" id="openSidebar"/>
            </div>
              </div>

              <div className="px-4  flex flex-col gap-y-3">
            <p className="text-gray-500 mt-7 mb-4">Pages______________________</p>
            <Link to="/" className="flex items-center" onClick={handleClick}><MdComputer className="mr-2"/> Home</Link>
            <Link to="/goods" className="flex items-center" onClick={handleClick}><IoShirtOutline  className="mr-2"/> Goods</Link>
            <Link to="/services" className="flex items-center" onClick={handleClick}><GiPencilRuler className="mr-2"/> Services</Link>
            <Link to="/login" className="flex items-center" onClick={handleClick}><GiComputerFan className="mr-2"/> Login</Link>
            {/* <p className="flex items-center" onClick={handleClick}><CgGirl className="mr-2"/> Health and Beauty</p>
            <p className="flex items-center" onClick={handleClick}><TbDotsCircleHorizontal className="mr-2"/>Others</p> */}
        </div>

        <div className="px-4  flex flex-col gap-y-3">
            <p className="text-gray-500 mt-7 mb-4">Goods______________________</p>
            <Link to="/electronics" className="flex items-center" onClick={handleClick}><MdComputer className="mr-2"/> Electronics</Link>
            <Link to="/clothings" className="flex items-center" onClick={handleClick}><IoShirtOutline  className="mr-2"/> Clothings and Jewelries</Link>
            <Link to="/schoolMaterial" className="flex items-center" onClick={handleClick}><GiPencilRuler className="mr-2"/> School materials</Link>
            <Link to="/homeUtensils" className="flex items-center" onClick={handleClick}><GiComputerFan className="mr-2"/> Home Utensils</Link>
            <Link to="/healthBeauty" className="flex items-center" onClick={handleClick}><CgGirl className="mr-2"/> Health and Beauty</Link>
            <Link to="/othersGoods" className="flex items-center" onClick={handleClick}><TbDotsCircleHorizontal className="mr-2"/>Others</Link>
        </div>
        <div className="px-4 mt-4 mb-8 flex flex-col gap-y-3">
            <p className="text-gray-500 my-4">Services_____________________</p>
            <Link to="/tutorial" className="flex items-center" onClick={handleClick}><BiBookBookmark className="mr-2"/> Tutoring</Link>
            <Link to="/housePainting" className="flex items-center" onClick={handleClick}><TfiPaintRoller className="mr-2"/> House Painting</Link>
            <Link to="/hairDressing" className="flex items-center" onClick={handleClick}><CgGirl className="mr-2"/> Hair Dressing</Link>
            <Link to="/laptopRepairs" className="flex items-center" onClick={handleClick}><MdComputer className="mr-2"/> Laptop and Phone Repairs</Link>
            <Link to="/catering" className="flex items-center" onClick={handleClick}><CiForkAndKnife className="mr-2"/> Catering</Link>
            <Link to="/techJob" className="flex items-center" onClick={handleClick}><MdComputer className="mr-2"/> Tech related Jobs</Link>
            <Link to="/tailoring" className="flex items-center" onClick={handleClick}><TiScissorsOutline className="mr-2"/> Tailoring</Link>
            <Link to="/othersService" className="flex items-center" onClick={handleClick}><TbDotsCircleHorizontal className="mr-2"/> Others</Link>
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