import React, { useState, useEffect } from 'react';
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import ImageUploader from './ImageUploader';
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios';


function AddGoods() {
  const initialFormData = {
    productName: '',
    description: '',
    productPrice: '',
    thumbnail: '',
    category: '',
    condition: '',
    preferredLocation: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setFormData({ ...formData, category: value });
  };

  const handleConditionChange = (value) => {
    setSelectedCondition(value);
    setFormData({ ...formData, condition: value });
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
      sent_category: formData.category,
      condition: formData.condition,
      description: formData.description,
      thumbnail:formData.thumbnail,
      location: formData.preferredLocation,
      name: formData.productName,
      price: formData.productPrice,
    };
    const productData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      productData.append(key, value);
    });
    
    photos.forEach((photo) => {
      productData.append('uploaded_images', photo);
    });

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
    axios.post('https://campus-buy.onrender.com/market/products/', productData, config)
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
                Enter your product details to register.
              </Typography>
              <div className="mt-8 mb-2 max-w-screen-lg md:w-96 ">
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    size="lg"
                    label="Product name"
                    name="productName"
                    value={formData.productName}
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
                    label="Product price"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleInputChange}
                  />
                  <Select
                    size="lg"
                    label="Category"
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
        className="w-full self-center md:w-64 mt-4 rounded-sm font-semibold text-xl text-center py-3 text-white bg-my-orange"
        onClick={handlePostButtonClick}
      >
        Click here to post
      </button>
    </>
  )
}

export default AddGoods;

