import React from 'react'
import {
    Card,
    Input,          
    Typography,
  } from "@material-tailwind/react";
import ImageUploader from './ImageUploader'

function AddGoods() {
  return (
    <>
    <div className="px-5 md:px-16">
        <div className='md:grid grid-cols-6 gap-16'>
        {/* ----------first col */}
        <div className="col-span-3" >            
                <Card color="transparent" className=' px-4 py-3 max-w-max'>                
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-96 ">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input style={{width:'67%'}} size="lg" label="Product name" />
                                    <Input style={{width:'67%'}} size="lg" label="Description" />
                                    <Input style={{width:'67%'}} size="lg" label="Product price" />
                                    <Input style={{width:'67%'}} size="lg" label="Conditions and features" />
                                    <Input style={{width:'67%'}} size="lg" label="Preferred location" />                    
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