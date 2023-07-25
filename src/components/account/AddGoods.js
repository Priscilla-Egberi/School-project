import React, { useState } from 'react';
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import ImageUploader from './ImageUploader';
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios'; // Import axios for making HTTP requests

function AddGoods() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    productPrice: "",
    category: "",
    kind: "",
    preferredLocation: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (data) => {
    // Merge the form data and images before posting to the endpoint
    const completeData = { ...formData, ...data };

    // Make the HTTP POST request to your endpoint
    axios.post('YOUR_ENDPOINT_URL', completeData)
      .then((response) => {
        // Handle the response if needed
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <div className="px-5 md:px-16">
        <div className='md:grid grid-cols-6 gap-16'>
          {/* ----------first col */}
          <div className="col-span-3" >
            <Card color="transparent" className=' px-4 py-3 w-full md:max-w-max'>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your goods details to register.
              </Typography>
              <form className="mt-8 mb-2 max-w-screen-lg md:w-96" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Product name" name="productName" value={formData.productName} onChange={handleChange} />
                  <Input size="lg" label="Description" name="description" value={formData.description} onChange={handleChange} />
                  <Input size="lg" label="Product price" name="productPrice" value={formData.productPrice} onChange={handleChange} />
                  <Select size="lg" label="Category" name="category" value={formData.category} onChange={handleChange}>
                    <Option>Electronics</Option>
                    <Option>Clothings and Jewelries</Option>
                    <Option>School material</Option>
                    <Option>Home Utensils</Option>
                    <Option>Health and Beauty</Option>
                    <Option>Others</Option>
                  </Select>
                  <Select size="lg" label="What kind?" name="kind" value={formData.kind} onChange={handleChange}>
                    <Option>New</Option>
                    <Option>Fairly used</Option>
                  </Select>
                  <Input size="lg" label="Preferred location" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} />
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </Card>
          </div>
          {/* ----------second col */}
          <div className="col-span-3" >
            <ImageUploader onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddGoods;


