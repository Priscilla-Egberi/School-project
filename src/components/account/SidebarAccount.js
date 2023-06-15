import React from 'react';
import {GiHamburgerMenu, GiPencilRuler, GiComputerFan} from "react-icons/gi";
import {MdComputer} from "react-icons/md";
import {IoShirtOutline} from "react-icons/io5";
import {CgGirl} from "react-icons/cg";
import {TbDotsCircleHorizontal} from  "react-icons/tb";
import {Link} from "react-router-dom"




function SideBar() {
  return (
    <section className='h-100 bg-white flex flex-col fixed'>
        <div id="title" className="flex flex-row items-center text-white p-2" style={{backgroundColor:"#EB6B39"}}> <GiHamburgerMenu className="mr-2"/> Categories</div>
        <div className="px-4  flex flex-col gap-y-3">
            <p className="text-gray-500 mt-7 mb-4">Goods______________________</p>
            <Link to="/electronics" className="flex items-center"><MdComputer className="mr-2"/> Electronics</Link>
            <Link to="/clothings" className="flex items-center"><IoShirtOutline  className="mr-2"/> Clothings and Jewelries</Link>
            <p className="flex items-center"><GiPencilRuler className="mr-2"/> School materials</p>
            <p className="flex items-center"><GiComputerFan className="mr-2"/> Home Utensils</p>
            <p className="flex items-center"><CgGirl className="mr-2"/> Health and Beauty</p>
            <p className="flex items-center"><TbDotsCircleHorizontal className="mr-2"/>Others</p>
        </div>

        
    </section>
  )
}

export default SideBar