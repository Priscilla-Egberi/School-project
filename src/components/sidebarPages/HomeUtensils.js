import React from 'react'
import Cards from "../Cards"
import {Img} from "../../data/data"
import { Link } from 'react-router-dom';

function HomeUtensils() {
  const filteredHomeUtensils = Img.filter((item) => item.category === 'Home Utensils');
console.log(filteredHomeUtensils);
const handleClick = () =>{
  window.scrollTo(0, 0);
  
    }
  return (
    <>
    
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Home Utensils</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredHomeUtensils.map((item) => (
          <div key={item.id}>
          <Link to={`/goods/${item.id}`} onClick={handleClick}>
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

export default HomeUtensils