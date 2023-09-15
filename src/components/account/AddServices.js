import React, { useState, useEffect } from 'react';
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import ImageUploader from './ImageUploader';
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios';


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
  const [photos, setPhotos] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setFormData({ ...formData, serviceCategory: value });
  };


  const handleImageUpload = (images) => {
    setPhotos(images);
  };

  const handleThumbnailUpload = (e) => {
      const files = e.target.files[0]
    setFormData({ ...formData, thumbnail: files });
    console.log(formData)    
  };

  useEffect(() => {
    const refreshAccessToken = async () => {
      const refresh_token = localStorage.getItem('refresh_token');
      if (refresh_token) {
        try {
          // Send a refresh request to get a new access token
          const response = await axios.post('https://campus-buy.onrender.com/api/token/refresh/', {"refresh": refresh_token });
          localStorage.setItem('access_token', response.data.access);
		console.log('token has been refreshed')
        } catch (error) {
          // Handle refresh token error (e.g., if refresh token has expired)
          // You may want to redirect the user to the login page or handle it in another way
          console.error('Error refreshing access token:', error);
        }
      }
    };
    // Refresh the token every minute (adjust the interval as needed)
    const tokenRefreshInterval = setInterval(refreshAccessToken, 60 * 1000); // 60 seconds * 1000 milliseconds
    // Cleanup the interval when the component unmounts
    return () => clearInterval(tokenRefreshInterval);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  const handlePostButtonClick = (e) => {
    e.preventDefault();
    // Create an object with the user data to be sent in the request body
    const userData = {
      ent_category: formData.category,
      escription: formData.description,
      humbnail:formData.thumbnail,
      ocation: formData.preferredLocation,
      ame: formData.productName,
      rice: formData.productPrice,
    };
    
    console.log(userData)
    const productData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      productData.append(key, value);
      console.log(value)
    });
    
    // const formData = new FormData();
    photos.forEach((photo) => {
      productData.append('uploaded_images', photo);
    });

    for (let [name, value] of productData) {
      if (value instanceof File) {
        console.log(`${name} - Name: ${value.name}, Type: ${value.type}, Size: ${value.size} bytes`);
      } else {
        console.log(`${name} = ${value}`);
      }
    }
    // Reset the form fields after processing
    // setFormData(initialFormData);
    // Clear uploaded images
    // ImageUploader.clearImages();
    // Clear the selected values for Select components
    // setSelectedCategory('');
    // setSelectedCondition('');
    // Make the POST request using Axios
    const getAccessToken = () => localStorage.getItem('access_token'); // Replace with your actual access token
    const config = {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data', // Assuming you're sending JSON data
      },
    };
    axios.post('https://campus-buy.onrender.com/market/services/', productData, config)
      .then(response => {
        // Handle the response here
        console.log('Status code:', response.status);
        alert('successful')
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });
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
                    <Option value="Tutoring">Tutoring</Option>
                    <Option value="House Painting">House Painting</Option>
                    <Option value="Hair Dressing">Hair Dressing</Option>
                    <Option value="Laptop and Phone Repairs">Laptop and Phone Repairs</Option>
                    <Option value="Tech related Jobs">Tech related Jobs</Option>
                    <Option value="Tailoring">Tailoring</Option>
                    <Option value="Others">Others</Option>
                  </Select>
                  {/* <Select
                    size="lg"
                    label="Condition"
                    value={selectedCondition}
                    onChange={handleConditionChange}
                  >
                    <Option value="New">New</Option>
                    <Option value="Fairly used">Fairly used</Option>
                  </Select> */}
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
            <input
                    type="file" 
                    label="Thumbnail"
                    name="thumbnail"
                    onChange={handleThumbnailUpload}
             />
          </div>
        </div>
      </form>
      <button
        className="w-full md:w-64 mt-4 mb-10 md:mb-0 rounded-sm font-semibold text-xl text-center py-3 text-white bg-my-orange"
        onClick={handlePostButtonClick}
      >
        Click here to post
      </button>
    </>
  )
}

export default AddServices;

