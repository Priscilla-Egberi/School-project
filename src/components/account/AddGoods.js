import React from 'react'
import {
    Card,
    Input,          
    Typography,
  } from "@material-tailwind/react";

function AddGoods() {
  return (
    <>
    <div className="px-4">
        <div className='grid grid-cols-3 gap-16'>
        {/* ----------first col */}
        <div className="col-span-2" >            
                <Card color="transparent px-4 py-3">                
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
        <div className="col-span-1" >
                        <Card>
                            <Typography>Thank you Lord for who you are</Typography>
                        </Card>
        </div>
        </div>
    </div>
    </>
  )
}

export default AddGoods