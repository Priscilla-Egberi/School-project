import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Img } from "../../data/data"
import {useState} from "react"
import ProductRight from './ProductRight';

function Product() {
    const [src, setSrc] = useState(Img[0].imgUrl[0])
    const clickHandler = (myIndex) =>{
        setSrc(Img[0].imgUrl[myIndex])
        console.log(src)
    }
  return (
    <div className='md:grid grid-cols-5 gap-x-8'>
       
        <div className="col-span-3 px-5 pt-10  leading-8 bg-white">
            {/* slide-section1 */}
            <div className="flex flex-row mb-3">
                <div id="sideslide" className="flex flex-col  justify-center  w-5/12 items-center gap-y-4">                        
                        <img src="https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        key={1}
                        // key={Img[0].id}
                        onClick={() => clickHandler(0)} 
                        /> 
                        <img src="https://images.unsplash.com/photo-1585412459212-8def26f7e84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        // key={Img[1].id}
                        key={2}
                        onClick={() => clickHandler(1)}
                        /> 
                        
                        
                        <img src="https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        // key={Img[2].id}
                        key={3}
                        onClick={() => clickHandler(2)}
                        /> 
                        
                </div>
                <div className='w-7/12'>                
                        <img src={src} alt="" className="rounded-lg w-full" />  
                </div>
            </div>
            {/* descriptions-section2 */}
            <div className="py-5">
                    <div className="flex flex-row justify-between border-l-4 border-orange-900 rounded-sm mb-3">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Designers Dark Red<br/> Complete Suit Set</h1>
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>#85,000</h1>
                    </div>
                    <p className='flex flex-row items-center'><AiOutlineClockCircle /> Posted 3hrs ago</p>
                    <p className='flex flex-row items-center'><CiLocationOn /> Perm Site, University of Uyo</p>
            </div>
            <hr/>

            <div className="py-5">
                    <div className="border-l-4 border-orange-900 rounded-sm mb-3">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Details</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Hendrerit lacus malesuada enim nascetur felis. Mauris egestas purus vitae vitae sit pellentesque dui sit.</p>
            </div>
            {/* <hr/>

            <div className="py-5">
                    <div className="border-l-4 border-orange-900 rounded-sm mb-3">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Conditions and Features</h1>
                    </div>
                    <ul className="grid grid-cols-3 gap-3" style={{listStyle:"circle", listStyleType:"inherit", listStylePosition:"inside"}}>
                        <li className="col-span-1 ">Size XL</li>
                        <li className="col-span-1 ">Brand New</li>
                        <li className="col-span-1 ">Shoe included</li>
                        <li className="col-span-1 ">Men only</li>
                        <li className="col-span-1 ">Complete Suit</li>
                        <li className="col-span-1 ">Dark Red Color</li>
                    </ul>
            </div> */}
            
        </div>
    
       <section className='col-span-2 flex flex-col justify-between leading-6'>
            <ProductRight />
       </section>
    </div>
  )
}

export default Product