import React from 'react'
import Card from "./GoodsCard"
import { Link } from 'react-router-dom'
import ProductContext from "../context/ProductContext"

function GoodsAvailable() {
  const goods = React.useContext(ProductContext)
  return (
    <>
        <div className="mx-10">
            <div className="flex flex-row gap-x-4 font-bold mt-10 border-b-2 border-gray-700">
                <p className='border-b-2 border-my-orange'>Available</p>
                <Link to='/account/goods/notavailable'>Not-available</Link>
            </div>
            <div className="md:grid grid-cols-2 gap-x-14">
            {goods.map((item) => (
          <div key={item.pk}>
          <Card id={item.pk}  amount={item.price} name={item.name} category={item.category.name} detail={item.images && item.images.length > 0 && item.images[0].image} className="col-span-1" />
        </div>
        ))}                     
            </div>
        </div>
    </>
  )
}

export default GoodsAvailable