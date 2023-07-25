import React, { useState } from 'react';
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import ImageUploader from './ImageUploader';
import { Select, Option } from "@material-tailwind/react";


function AddServices() {
  const initialFormData = {
    serviceName: '',
    description: '',
    experience: '',
    serviceCategory: '',
    condition: '',
    preferredLocation: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setFormData({ ...formData, serviceCategory: value });
  };

  const handleConditionChange = (value) => {
    setSelectedCondition(value);
    setFormData({ ...formData, condition: value });
  };

  const handlePostButtonClick = () => {
    console.log('Post data:', formData);
    // Here you can perform any further actions with the post data, e.g., sending it to an API, etc.
  
    // Reset the form fields after processing
    setFormData(initialFormData);
  
    // Clear uploaded images
    ImageUploader.clearImages();
  
    // Clear the selected values for Select components
    setSelectedCategory('');
    setSelectedCondition('');
  };
  

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
  };

  return (
    <>
      <form className="px-5 md:px-16">
        <div className='grid md:grid-cols-6 gap-6 md:gap-16'>
          {/* ----------first col */}
          <div className="col-span-3" >
            <Card color="transparent" className=' px-4 py-3 w-full md:max-w-max'>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your service details to register.
              </Typography>
              <div className="mt-8 mb-2 max-w-screen-lg md:w-96 ">
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    size="lg"
                    label="Service name"
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleInputChange}
                  />
                  <Input
                    size="lg"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  <Input
                    size="lg"
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                  <Select
                    size="lg"
                    label="Service Category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <Option value="Electronics">Electronics</Option>
                    <Option value="Clothings and Jewelries">Clothings and Jewelries</Option>
                    <Option value="School material">School material</Option>
                    <Option value="Home Utensils">Home Utensils</Option>
                    <Option value="Health and Beauty">Health and Beauty</Option>
                    <Option value="Others">Others</Option>
                  </Select>
                  <Select
                    size="lg"
                    label="Condition"
                    value={selectedCondition}
                    onChange={handleConditionChange}
                  >
                    <Option value="New">New</Option>
                    <Option value="Fairly used">Fairly used</Option>
                  </Select>
                  <Input
                    size="lg"
                    label="Preferred location"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </Card>
          </div>
          {/* ----------second col */}
          <div className="col-span-3" >
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        </div>
      </form>
      <button
        className="w-full mt-4 rounded-sm text-center py-3 text-white bg-my-orange"
        onClick={handlePostButtonClick}
      >
        Post
      </button>
    </>
  )
}

export default AddServices;

