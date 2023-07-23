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
        {/* ... */}
        {/* The rest of the label and input elements remain the same */}
      </label>

      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {imagePreviews.map((imageURL, index) => (
            <img
              key={index}
              src={imageURL}
              alt={`Image ${index}`}
              style={{ width: '100%', height: '150px' }}
            />
          ))}
        </div>
      )}

      <button
        className="mt-4 rounded-sm flex flex-row items-center justify-center py-3 text-white bg-my-orange"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default ImageUploader;
