import React from 'react'
// import Card from "./GoodsCard"
import { Link } from 'react-router-dom'

function GoodsNotAvailable() {
  return (
    <>
        <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <Link to='/account/goods'>Available</Link>
                <p className='border-b-2 border-my-orange'>Not-available</p>
            </div>
            <div className="md:grid grid-cols-2 gap-x-14">            
            {/* <Card />           
            <Card />           
            <Card />           
            <Card />           
            <Card /> */}
            </div>
        </div>
    </>
  )
}

export default GoodsNotAvailable