import React from 'react'
import {
    Card,
    Input,          
    Typography,
    Button
  } from "@material-tailwind/react";
import ImageUploader from './ImageUploader'

function AddGoods() {
  return (
    <>
    <div className="px-16">
        <div className='md:grid grid-cols-6 gap-16'>
        {/* ----------first col */}
        <div className="col-span-3" >            
                <Card color="transparent" className=' px-4 py-3 max-w-max'>                
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input size="sm" label="Product name" />
                                    <Input className='min-w-[100px]' size="lg" label="Description" />
                                    <Input className='min-w-[100px]' size="lg" label="Product price" />
                                    <Input className='min-w-[100px]' size="lg" label="Conditions and features" />
                                    <Input className='min-w-[100px]' size="lg" label="Preferred location" />                    
                                </div>                  
                            </form>
                </Card>
        </div>
        {/* ----------second col */}
        <div className="col-span-3" >
            <ImageUploader />
        </div>
        </div>
    </div>
    </>
  )
}

export default AddGoods