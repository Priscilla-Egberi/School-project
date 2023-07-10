import React from 'react'

function VerifiedAddID() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Verification</p>
      
        <div className="mx-auto mt-14 max-w-sm p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-6'>
                <FaUserTimes size={32} />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Add your school Id to verify your account<br>Just the front</br></h1>
            <div className="max-w-xl">
                        <label
                            className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span className="font-medium text-gray-600">
                                    Drop Item's Image to Attach, or
                                    <span className="text-blue-600 underline">browse</span>
                                </span>
                            </span>
                            <input type="file" name="file_upload" className="hidden" />
                        </label>
                    </div>
                <Button className="mt-4 mx-3 rounded-sm flex flex-row items-center justify-center py-3 text-white bg-my-orange"> Submit</Button>
        </div>
       
      </div>
  )
}

export default VerifiedAddID