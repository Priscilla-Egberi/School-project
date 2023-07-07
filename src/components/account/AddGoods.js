import React from 'react'
import {
    Card,
    Input,          
    Typography,
  } from "@material-tailwind/react";

function AddGoods() {
  return (
    <Card color="transparent" shadow={false}>
                
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
  )
}

export default AddGoods