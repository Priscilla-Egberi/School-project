import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).slice(0, 3); // Limit to three images
    const validImages = newImages.filter((file) => file.type.startsWith('image/'));

    // Convert FileList to an array of URLs and set image previews
    const imageURLs = validImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(imageURLs);

    setImages(validImages);
  };

  const handlePost = () => {
    // In a real-world application, you can handle posting the images to a server here
    console.log('Uploading images:', images);
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
              ? "Drop Item's Image to Attach, or"
              : 'Uploaded Images:'}
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
      <p>please select the three images at once before droppind or uploading</p>
      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {imagePreviews.map((imageURL, index) => (
            <img
              key={index}
              src={imageURL}
              alt={`Image ${index}`}
              style={{ width: '150px', height: '150px', margin: '10px' }}
            />
          ))}
        </div>
      )}

      <button
        className="w-full mt-4 rounded-sm text-center py-3 text-white bg-my-orange"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default ImageUploader;
