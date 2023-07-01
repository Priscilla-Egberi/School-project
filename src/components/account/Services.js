import React from 'react'
import Card from "./GoodsCard"

function Goods() {
  return (
    <div>
    <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Services</p>
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