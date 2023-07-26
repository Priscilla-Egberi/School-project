import React from 'react'
import firstImage from "../images/Group 34.jpg"
import secondImage from "../images/Group 11.jpg"
import thirdImage from "../images/Group 12.jpg"
import Cards from "../components/Cards"
import Card from "../components/Card"
import Body from "../components/Body"
import Search from "./Searching";
import {Img} from "../data/data"

function RoutableHomeSide() {



  return (
    
    <>
    <Search data={Img} />
    <div className='grid grid-rows-2 gap-y-12'>

                {/* ----------Home images */}
                      <div className="row-span-1 grid grid-cols-2 md:grid-cols-3 gap-3 grid-flow-row-dense">
                        <div className="col-span-2 row-span-2">
                          <img src={firstImage} alt="firstImage" className='w-full ' />
                        </div>
                        <div className="col-span-1">
                          <img src={secondImage} alt="secondImage"className='w-full h-full' />
                        </div>
                        <div className="col-span-1">
                          <img src={thirdImage} alt="thirdImage" className='w-full h-full'/>
                          </div>
                      </div>
                {/* -----------Cards */}
                <div className="row-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">Trending</h2>
                      <div className="md:hidden grid grid-cols-2 gap-4 ">
                              
                              <Cards name="Tote bags" amount="#400" condition="New" detail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSz0yKErbtzYHA4UF6arObXo0SEIY_485xw&usqp=CAU" className="col-span-1" />
                              <Cards name="T-shirs" amount="#2000" condition="New" detail="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                      <div className="hidden md:grid grid-cols-4 gap-4 ">
                              <Card name="T-square" amount="#2000" condition="Fairly Used" detail="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="col-span-1" />
                              <Card name="Hp laptop" amount="#12000" condition="Fairly Used" detail="https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="col-span-1" />
                              <Card name="Tote bags" amount="#400" condition="New" detail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSz0yKErbtzYHA4UF6arObXo0SEIY_485xw&usqp=CAU" className="col-span-1" />
                              <Card name="T-shirs" amount="#2000" condition="New" detail="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                  

                </div>
    </div>
    
    
    <Body/>
    </>

  )
}

export default RoutableHomeSide