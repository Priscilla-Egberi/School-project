import React from 'react'

function BodyAccount() {
  return (
    <div>
      <p classNameName='py-3 px-5'>My Profile</p>
      <div classNameName=''>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        <div>
          <h1>Julian Benedict</h1>
          <p>17/EG/CO/1035</p>
        </div>
      </div>
      {/* tables */}
      <div classNameName="grid grid-cols-2">
          {/* table1 */}
          <div className="border border-gray-300 mx-5 rounded">
                            <h1 className="px-5 py-3 border-b border-gray-300 text-xl font-bold tracking-tight text-gray-900 ">Information</h1>
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
      </div>
    </div>
  )
}

export default BodyAccount