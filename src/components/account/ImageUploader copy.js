import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).slice(0, 3); // Limit to three images
    const validImages = newImages.filter((file) => file.type.startsWith('image/'));
    // const formData = new FormData();
    // validImages.forEach((photo) => {
    //   formData.append('uploaded_image', photo);
    // });
    
    // Convert FileList to an array of URLs and set image previews
    const imageURLs = validImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(imageURLs);
    setImages(validImages);
    // Pass the images back to the AddGoods component
    onImageUpload(validImages);
  };

  // Add a method to get the images from the component
  ImageUploader.getImages = () => {
    return images;
  };

  // Add a method to clear the images
  ImageUploader.clearImages = () => {
    setImages([]);
    setImagePreviews([]);
  };

  return (
    <div className="max-w-xl">
      <label
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="font-medium text-gray-600">
            {imagePreviews.length === 0
              ? "Drop images to prove your work, or"
              : 'Images Uploaded:'}
            <span className="text-blue-600 underline"> browse</span>
          </span>
        </span>
        <input
          type="file"
          name="file_upload"
          className="hidden"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </label>
      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {imagePreviews.map((imageURL, index) => (
            <img
              key={index}
              src={imageURL}
              alt={`product ${index}`}
              style={{ width: '150px', height: '150px', margin: '10px' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;



