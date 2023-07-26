import React from 'react'
import Cards from "./Cards"
import {IoArrowForwardSharp} from "react-icons/io5"
import { Img } from '../data/data';

function Body() {
  const filteredElectronics = Img.filter((item) => item.category === 'Electronics').slice(0, 4);
  const filteredClothingsJewelries = Img.filter((item) => item.category === 'Clothings and Jewelries').slice(0, 4);
  const filteredSchool = Img.filter((item) => item.category === 'School Materials').splice(0, 4);
  const filteredHealth = Img.filter((item) => item.category === 'Health and Beauty').splice(0, 4);
  return (
    <>
    {/* Electronics */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Electronics</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {filteredElectronics.map((item) => (
          <div key={item.id}>
          <Link to={`/goods/${item.id}`}>
                <Cards name={item.name} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" />

            {/* <h3>{item.title}</h3> */}
          </Link>
        </div>
        ))}
    </div>
  </div>
    </div>


    {/* Jewelries/clothing */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="hidden md:flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Jewelries and Clothings</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
  </div>    
  <div className="flex md:hidden justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Clothings</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
  </div>    
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {filteredClothingsJewelries.map((item) => (
                    <div key={item.id}>
                    <Link to={`/goods/${item.id}`}>
                        <Cards name={item.name} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" />

                    {/* <h3>{item.title}</h3> */}
                    </Link>
                </div>
                ))}
    </div>
  </div>
</div>

{/* school materials */}
<div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">School materials</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>    
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {filteredSchool.map((item) => (
          <div key={item.id}>
          <Link to={`/goods/${item.id}`}>
                <Cards name={item.name} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" />

            {/* <h3>{item.title}</h3> */}
          </Link>
        </div>
        ))}
    </div>
  </div>
</div>

{/* Health and Beauty */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Health and Beauty</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
    {filteredHealth.map((item) => (
          <div key={item.id}>
          <Link to={`/goods/${item.id}`}>
                <Cards name={item.name} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" />

            {/* <h3>{item.title}</h3> */}
          </Link>
        </div>
        ))}
    </div>
  </div>
</div>
    </>
  )
}

export default Body