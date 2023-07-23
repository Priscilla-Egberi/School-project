import React from 'react'
import {
    Card,
    Input,          
    Typography,
  } from "@material-tailwind/react";
import ImageUploader from './ImageUploader';

function AddServices() {
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
                                    <Input size="lg" label="Service name" />
                                    <Input size="lg" label="Description" />
                                    <Input size="lg" label="Experience 1" />
                                    <Input size="lg" label="Experience 2" />
                                    <Input size="lg" label="Preferred location" />                    
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

export default AddServices