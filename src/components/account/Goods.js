import React, {useContext} from 'react'
import Card from "./GoodsCard"
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';

function Goods() {
  const [check, setCheck] = useContext(CheckContext)
  console.log(check)

  function handleChange() {
      setCheck(prevCheck => !prevCheck);
    }
  return (
    <div>
    <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>Goods
        Goods
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>    
    </div>
    
    <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <p className='border-b-2 border-my-orange'>Available</p>
                <p>Not-available</p>
            </div>
            <div className="grid grid-cols-2 gap-x-14">            
            <Card />           
            <Card />           
            <Card />           
            <Card />           
            <Card />
            </div>
        </div>
    </div>







   
  )
}

export default Goods