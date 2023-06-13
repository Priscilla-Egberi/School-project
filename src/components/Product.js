import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Img } from "../data/data"
import {useState} from "react"

function Product() {
    const [src, setSrc] = useState(Img[0])
    const clickHandler = (myIndex) =>{
        setSrc(Img[myIndex])
    }
  return (
    <div className='grid grid-cols-5 gap-x-8'>
       
        <div className="col-span-3 px-5 pt-10  leading-8 bg-white">
            {/* slide-section1 */}
            <div className="flex flex-row mb-3">
                <div id="sideslide" className="flex flex-col  justify-center  w-5/12 items-center gap-y-4">                        
                        <img src="https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        key={Img[0].id}
                        onClick={() => clickHandler(0)} 
                        /> 
                        <img src="https://images.unsplash.com/photo-1585412459212-8def26f7e84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        key={Img[1].id}
                        onClick={() => clickHandler(1)}
                        /> 
                        
                        
                        <img src="https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg w-12"
                        key={Img[2].id}
                        onClick={() => clickHandler(2)}
                        /> 
                        
                </div>
                <div className='w-7/12'>                
                        <img src={src.imgUrl} alt="" className="rounded-lg w-full" />  
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
            <hr/>
        </div>
    
        <div className="col-span-2 px-3 pt-10 flex flex-col items-center bg-white">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            alt="profilepic" 
            className="w-60 h-60 rounded-full border-4 border-blue-gray-900" />                
            <h1 className='text-2xl font-bold tracking-tight text-gray-900'>Julian Benedict</h1>

            <table className="table-auto text-left">
            <tbody>
                <tr>
                    <td className="w-36">Faculty:</td>
                    <td>Engineering</td>             
                </tr>
                <tr>
                    <td>Dept:</td>
                    <td>Computer Engineering</td>               
                </tr>
                <tr>                
                    <td>Level:</td>
                    <td>500level</td>
                </tr>
                <tr>                
                    <td>Campus:</td>
                    <td>Permsite</td>
                </tr>
            </tbody>
            </table>


        </div>
    </div>
  )
}

export default Product