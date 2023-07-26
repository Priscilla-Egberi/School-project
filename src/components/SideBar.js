import React from 'react';
import {GiHamburgerMenu, GiPencilRuler, GiComputerFan} from "react-icons/gi";
import {MdComputer} from "react-icons/md";
import {IoShirtOutline} from "react-icons/io5";
import {CgGirl} from "react-icons/cg";
import {TbDotsCircleHorizontal} from  "react-icons/tb";
import {CiForkAndKnife} from "react-icons/ci";
import {BiBookBookmark} from "react-icons/bi";
import {TfiPaintRoller} from "react-icons/tfi";
import {TiScissorsOutline} from "react-icons/ti";
import {Link} from "react-router-dom"




function SideBar() {
  return (
    <section className='h-100 bg-white flex flex-col sticky top-28'>
        <div id="title" className="flex flex-row items-center text-white p-2" style={{backgroundColor:"#EB6B39"}}> <GiHamburgerMenu className="mr-2"/> Categories</div>
        
        <div className="px-4  flex flex-col gap-y-3">
            <p className="text-gray-500 mt-7 mb-4">Goods______________________</p>
            <Link to="/electronics" className="flex items-center"><MdComputer className="mr-2"/> Electronics</Link>
            <Link to="/clothings" className="flex items-center"><IoShirtOutline  className="mr-2"/> Clothings and Jewelries</Link>
            <Link to="/schoolMaterial" className="flex items-center"><GiPencilRuler className="mr-2"/> School materials</Link>
            <Link to="/homeUtensils" className="flex items-center"><GiComputerFan className="mr-2"/> Home Utensils</Link>
            <Link to="/healthBeauty" className="flex items-center"><CgGirl className="mr-2"/> Health and Beauty</Link>
            <Link to="/othersGoods" className="flex items-center"><TbDotsCircleHorizontal className="mr-2"/>Others</Link>
        </div>
        <div className="px-4 mt-4 mb-8 flex flex-col gap-y-3">
            <p className="text-gray-500 my-4">Services_____________________</p>
            <Link to="/tutorial" className="flex items-center"><BiBookBookmark className="mr-2"/> Tutoring</Link>
            <Link to="/housePainting" className="flex items-center"><TfiPaintRoller className="mr-2"/> House Painting</Link>
            <Link to="/hairDressing" className="flex items-center"><CgGirl className="mr-2"/> Hair Dressing</Link>
            <Link to="/laptopRepairs" className="flex items-center"><MdComputer className="mr-2"/> Laptop and Phone Repairs</Link>
            <Link to="/catering" className="flex items-center"><CiForkAndKnife className="mr-2"/> Catering</Link>
            <Link to="/techJob" className="flex items-center"><MdComputer className="mr-2"/> Tech related Jobs</Link>
            <Link to="/tailoring" className="flex items-center"><TiScissorsOutline className="mr-2"/> Tailoring</Link>
            <Link to="/othersService" className="flex items-center"><TbDotsCircleHorizontal className="mr-2"/> Others</Link>
        </div>
        
    </section>
  )
}

export default SideBar