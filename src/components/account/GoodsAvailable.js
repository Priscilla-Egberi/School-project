import React from 'react'
import Card from "./GoodsCard"
import { Link } from 'react-router-dom'

function GoodsAvailable() {
  return (
    <>
        <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <p className='border-b-2 border-my-orange'>Available</p>
                <Link to='/account/goods/notavailable'>Not-available</Link>
            </div>
            <div className="md:grid grid-cols-2 gap-x-14">            
            <Card />           
            <Card />           
            <Card />           
            <Card />           
            <Card />
            </div>
        </div>
    </>
  )
}

export default GoodsAvailable