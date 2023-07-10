import React from 'react'
import {
    Card,
    Input,          
    Typography,
    Button
  } from "@material-tailwind/react";

function AddServices() {
  return (
    <>
    <div className="px-16">
        <div className='grid grid-cols-6 gap-16'>
        {/* ----------first col */}
        <div className="col-span-3" >            
                <Card color="transparent" className=' px-4 py-3 max-w-max'>                
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input size="lg" label="Product name" />
                                    <Input size="lg" label="Description" />
                                    <Input size="lg" label="Product price" />
                                    <Input size="lg" label="Conditions and features" />
                                    <Input size="lg" label="Preferred location" />                    
                                </div>                  
                            </form>
                </Card>
        </div>
        {/* ----------second col */}
        <div className="col-span-3" >
            <Card className='px-4 py-3'>
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
                  
                    <Button className="mt-4 rounded-sm flex flex-row items-center justify-center py-3 text-white bg-my-orange"> Post</Button>
            </Card>
        </div>
        </div>
    </div>
    </>
  )
}

export default AddServices