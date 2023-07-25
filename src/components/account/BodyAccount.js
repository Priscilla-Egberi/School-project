import React, {useContext} from 'react'
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';



export function BodyAccount () {

    const [check, setCheck] = useContext(CheckContext)
    console.log(check)

    function handleChange() {
        setCheck(prevCheck => !prevCheck);
      }
    
  return (
    <div>
      <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>
        My Profile
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>
        </div>
          <div className='my-4 px-16 flex flex-row items-center'>
                  <div className="max-w-96 max-h-36 min-w-54 min-h-54 rounded-full bg-gray-700 border-4 border-gray-700 my-0 mr-4">
                    <img src="data:image/png;base64,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" 
                  alt="" 
                  className="w-full h-full rounded-full" /></div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
                    <p>17/EG/CO/1035</p>
                  </div>
          </div>
      {/* tables */}
      <div className="mx-8 md:mx-16 grid md:grid-cols-2 gap-16">
          {/* table 1 */}
          <div className="border border-gray-300 rounded">
                            <h1 className="px-5 py-2 border-b border-gray-300 text-xl font-bold tracking-tight text-gray-900 ">Information</h1>
                            <div className="px-5 my-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Display Name</p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-bold tracking-tight text-gray-900">Juilan Benedict</p>
                                    <p className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                                </div>
                            </div>
                            <div className="px-5 my-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-bold tracking-tight text-gray-900">Computer Engineering</p>
                                    <p className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                                </div>
                            </div>
                            <div className="px-5 my-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Level</p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-bold tracking-tight text-gray-900">500 Level</p>
                                    <p className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                                </div>
                            </div>
                            <div className="px-5 my-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Campus</p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-bold tracking-tight text-gray-900">Permsite</p>
                                    <p className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                                </div>
                            </div>
                            <div className="px-5 my-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Password</p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-bold tracking-tight text-gray-900">.........</p>
                                    <p className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                                </div>
                            </div>
                        
                        <div>
              
          </div>
        </div>

        {/* table 2 */}
        <div className="border border-gray-300 rounded">
                    <h1 class="px-5 py-2 border-b border-gray-300 text-xl font-bold tracking-tight text-gray-900 ">Connection</h1>
                    <div class="px-5 my-3">
                        <p class="text-base font-bold tracking-tight text-gray-900">Facebook</p>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="text-sm text-gray-500 dark:text-gray-400">julianbenedict</p>
                            <p class="bg-gray-300 hover:bg-gray-600 font-semibold text-xs hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                        </div>
                    </div>
                    <div class="px-5 my-3">
                        <p class="text-base font-bold tracking-tight text-gray-900">Whatsapp</p>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="text-sm text-gray-500 dark:text-gray-400">09034078558</p>
                            <p class="bg-gray-300 hover:bg-gray-600 font-semibold text-xs hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                        </div>
                    </div>
                    <div class="px-5 my-3">
                        <p class="text-base font-bold tracking-tight text-gray-900">Email</p>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="text-sm text-gray-500 dark:text-gray-400">Details</p>
                            <p class="bg-gray-300 hover:bg-gray-600 font-semibold text-xs hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                        </div>
                    </div>
                    <div class="px-5 my-3">
                        <p class="text-base font-bold tracking-tight text-gray-900">Instagram</p>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="text-sm text-gray-500 dark:text-gray-400">www.instagram</p>
                            <p class="bg-gray-300 hover:bg-gray-600 font-semibold text-xs hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                        </div>
                    </div>
                    <div class="px-5 my-3">
                        <p class="text-base font-bold tracking-tight text-gray-900">Phone number</p>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="text-sm text-gray-500 dark:text-gray-400">090909090909</p>
                            <p class="bg-gray-300 hover:bg-gray-600 font-semibold text-xs hover:text-gray-200 py-2 px-3 rounded">Edit</p>
                        </div>
                    </div>
                   
        </div>
      </div>
      <div className="md:hidden h-56"></div>
    </div>
  )
}

export default BodyAccount;