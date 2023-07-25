import React from 'react'
import {
    Card,
    Input,          
    Typography,
  } from "@material-tailwind/react";
import ImageUploader from './ImageUploader'
import { Select, Option } from "@material-tailwind/react";
 

function AddGoods() {
  return (
    <>
    <div className="px-5 md:px-16">
        <div className='md:grid grid-cols-6 gap-16'>
        {/* ----------first col */}
        <div className="col-span-3" >            
                <Card color="transparent" className=' px-4 py-3 w-full md:max-w-max'>                
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 max-w-screen-lg md:w-96 ">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input size="lg" label="Product name" />
                                    <Input size="lg" label="Description" />
                                    <Input size="lg" label="Product price" />
                                    <Select size="lg" label="Category">
                                      <Option>Electronics</Option>
                                      <Option>Clothings and Jewelries</Option>
                                      <Option>School material</Option>
                                      <Option>Home Utensils</Option>
                                      <Option>Health and Beauty</Option>
                                      <Option>Others</Option>
                                    </Select>
                                    <Select size="lg" label="What kind?">
                                        <Option>New</Option>
                                        <Option>Fairly used</Option>
                                      </Select>
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

export default AddGoods