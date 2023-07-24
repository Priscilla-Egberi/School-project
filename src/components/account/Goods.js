import React, {useContext} from 'react'
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';
import { Outlet } from 'react-router-dom';

function Goods() {
  const [check, setCheck] = useContext(CheckContext)
  console.log(check)

  function handleChange() {
      setCheck(prevCheck => !prevCheck);
    }
  return (
    <div>
    <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>
        Goods
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>    
    </div>
    
        <Outlet />
    </div>







   
  )
}

export default Goods