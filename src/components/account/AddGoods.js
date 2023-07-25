import React, { useState } from 'react';
import { Card, Input, Typography } from '@material-tailwind/react';
import ImageUploader from './ImageUploader';
import { Select, Option } from '@material-tailwind/react';

function AddGoods() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    productPrice: '',
    category: '',
    kind: '',
    preferredLocation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePost = (imageData) => {
    // Combine the input data and image data into an object
    const dataToPost = {
      ...formData,
      images: imageData.images,
      imagePreviews: imageData.imagePreviews,
    };

    // Do whatever you want with the data here (e.g., send it to an API, store it in state, etc.)
    console.log('Data to post:', dataToPost);
  };

  return (
    <>
      <form className="px-5 md:px-16">
        <div className="md:grid grid-cols-6 gap-16">
        {/* ----------first col */}
        <div className="col-span-3" >            
                <Card color="transparent" className=' px-4 py-3 w-full md:max-w-max'>                
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <div className="mt-8 mb-2 max-w-screen-lg md:w-96 ">
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
                            </div>
                </Card>
        </div>
        {/* ----------second col */}
        <div className="col-span-3">
            <ImageUploader onPost={handlePost} /> {/* Pass the callback function to ImageUploader */}
          </div>
        </div>
      </form>
    </>
  )
}

export default AddGoods