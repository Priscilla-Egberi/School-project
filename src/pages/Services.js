import React from 'react'
import Navbar from '../components/Navbar'
import Search from "../components/Searching";
import DropDown from "../components/Goods/DropDown"
import {Img} from "../data/data"

function Services() {
  return (
    <>
    <Navbar />
        <h2 className="mt-2 md:mt-20 text-2xl semibold md:hidden ml-3 my-3">Goods</h2>
        <div className="md:mx-20 mx-5 md:my-12 g-y-5">
        <Search variant="gradient" size="sm" fullWidth className="mb-5" data={Img}/>
        </div>
        <div className="md:mx-20 mx-5 my-12">
        <DropDown />
        </div>
    <div className="mx-10">
    <div className='py-4 border-b-2 border-gray'>
       <div className="flex items-start justify-between px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="w-24 h-24 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>Nwaniba</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-6">Not Available</p>
       </div>
       <p className='px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>
    
    <div className='py-4 border-b-2 border-gray'>
       <div className="flex items-start justify-between px-16">
       <div className='flex flex-row items-center'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  className="w-24 h-24 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p className='font-semibold'>Hairstylist</p>
                    <p className='font-semibold text-gray-600'>Nwaniba</p>
                  </div>
          </div>
          <p className="text-blue-700 pt-6">Not Available</p>
       </div>
       <p className='px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque expedita aliquam voluptatum eius, dolores eveniet id pariatur explicabo cupiditate?</p>
    </div>
    </div>
    </>
  )
}

export default Services