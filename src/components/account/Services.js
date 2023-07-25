import React, {useContext} from 'react'
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';
import Dropdown from './ServiceDropdown'

function Services() {

  const [check, setCheck] = useContext(CheckContext)

  function handleChange() {
    setCheck(prevCheck => !prevCheck);
  }

  return (
    <div>
    <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>Services
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>    
    </div>

    <div className="mx-5 md:mx-44">
    <div className='py-4 border-b-2 border-gray-300'>
       <div className="flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>See resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6"><Dropdown /></p>
       </div>
       <p className='md:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>
    <div className='py-4 border-b-2 border-gray-300'>
       <div className="flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>See resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6"><Dropdown /></p>
       </div>
       <p className='md:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>
    <div className='py-4 border-b-2 border-gray-300'>
       <div className="flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>See resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6"><Dropdown /></p>
       </div>
       <p className='md:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>
    <div className='py-4 border-b-2 border-gray-300'>
       <div className="flex items-start justify-between md:px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div className='leading-none md:leading-normal'>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>See resume</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-3 md:pt-6"><Dropdown /></p>
       </div>
       <p className='md:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>

    
    </div>

    {/* <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <p className='border-b-2 border-my-orange'>Available</p>
                <p>Not-available</p>
            </div>
            <div className="md:grid grid-cols-2 gap-x-14">            
            <Card />           
            <Card />           
            <Card />           
            <Card />           
            <Card />
            </div>
        </div> */}
    </div>







   
  )
}

export default Services