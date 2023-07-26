import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaPhoneAlt, FaFlag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { userData } from '../../data/user';

function ProductRight({ userId}) {
    const user = userData.find(user => user.id === userId);
    console.log(user)
  return (
    <>
         <div className="px-3 py-5 bg-white">
            <div className="flex justify-center items-center">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                        alt="profilepic" 
                        className="w-60 h-60 rounded-full border-4 border-blue-gray-900 block my-0 mx-auto" />     
            </div>               
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 text-center'> Benedict</h1>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 mt-5'>About</h1>
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

            {/* connect with student section */}
            <div>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 mt-5 mb-2'>Connect with student on</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col  items-center ">
                    <RiWhatsappFill />
                    <p className=" text-xs">Whatsapp</p>
                </div>
                <div className="flex flex-col  items-center ">
                    <FaFacebook />
                    <p className=" text-xs">Facebook</p>
                </div>
                <div className="flex flex-col  items-center ">
                    <MdEmail />
                    <p className=" text-xs">Email</p>
                </div>
                <div className="flex flex-col items-center ">
                    <FaPhoneAlt />
                    <p className=" text-xs">Phone</p>
                </div>
            </div>
            </div>


        </div>

        {/* second container */}
        <div className="px-3 py-5 bg-white">
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2 mb-3'>Safety Tips</h1>
                    
                    <ul className="" style={{listStyle:"circle", listStyleType:"inherit", listStylePosition:"inside"}}>
                        <li className="">Don't pay in advance</li>
                        <li className="">Inspect the item and ensure its exactly what you want</li>
                        <li className="">Meet the seller at a safe public space</li>
                        <li className="">Only pay when you are satisfied</li>
                        <li className="">On delivery check that the item delivered is what was expected</li>
                       
                    </ul>
        </div>

        {/* third container */}
        <div className="border border-red-500 px-3 py-5  bg-white">
        <h1 className='text-lg font-bold tracking-tight text-red-500 mx-auto  flex flex-row items-center justify-center'> <FaFlag className="mr-4" /> Report Spam or Abuse</h1>
        </div>

    </>
  )
}

export default ProductRight