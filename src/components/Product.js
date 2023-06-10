import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

function Product() {
  return (
    <div className='grid grid-cols-3'>
        <div className="col-span-2 px-5 py-3">
            {/* slide-section1 */}
            {/* descriptions-section2 */}
            <div>
                    <div className="flex flex-row justify-between border-l-4 border-orange-900 rounded-sm">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Designers Dark Red Complete Suit Set</h1>
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>#85,000</h1>
                    </div>
                    <p className='flex flex-row items-center'><AiOutlineClockCircle /> Posted 3hrs ago</p>
                    <p className='flex flex-row items-center'><CiLocationOn /> Perm Site, University of Uyo</p>
            </div>
            <hr/>

            <div>
                    <div className="border-l-4 border-orange-900 rounded-sm">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Details</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Hendrerit lacus malesuada enim nascetur felis. Mauris egestas purus vitae vitae sit pellentesque dui sit.</p>
            </div>
            <hr/>
        </div>
    
        <div className="col-span-1 p-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="profilepic" className="rounded-full border-4 border-blue-gray-900" />                
            <h1 className='text-2xl font-bold tracking-tight text-gray-900'>Julian Benedict</h1>

            <table class="table-auto">
            <tbody>
                <tr>
                <td>Faculty:</td>
                <td>Dept:</td>
                <td>Level"</td>
                <td>Campus:</td>
                </tr>
                <tr>
                <td>Engineering</td>
                <td>Computer Engineering</td>
                <td>500level</td>
                <td>Permsite</td>
                </tr>
            </tbody>
            </table>


        </div>
    </div>
  )
}

export default Product