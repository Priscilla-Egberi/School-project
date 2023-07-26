import React from 'react'
import Navbar from '../components/Navbar'
import Search from "../components/Searching";
// import DropDown from "../components/Goods/DropDown"
import Cards from "../components/Cards"
import { Link } from 'react-router-dom';
import {Img} from "../data/data"

function Goods() {
  return (
    <>
    <div> 
        <h2 className="mt-2 md:mt-20 text-2xl semibold md:hidden ml-3 my-3">Goods</h2>
        <div className="md:mx-20 mx-5 md:my-12 g-y-5">
        <Search variant="gradient" size="sm" fullWidth className="mb-5" data={Img}/>
        </div>
        {/* <div className="md:mx-20 mx-5 my-12">
        <DropDown />
        </div> */}
                      <div className="mt-5 mx-3 md:mx-20 grid grid-cols-3 md:grid-cols-6 gap-4 ">
                      {Img.map(goods => (
                                <div key={goods.id}>
                                  <Link to={`/goods/${goods.id}`}>
                                        <Cards name={goods.name} condition={goods.condition} amount={goods.amount} detail={goods.imgUrl[0]} className="col-span-1" />

                                    {/* <h3>{goods.title}</h3> */}
                                  </Link>
                                </div>
      ))}
                              
                      </div>
       
    </div></>
  )
}

export default Goods