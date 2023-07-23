import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).slice(0, 3); // Limit to three images

    // Convert FileList to an array of URLs
    const imageURLs = newImages.map((file) => URL.createObjectURL(file));

    setImages(imageURLs);
  };

  console.log(images)

  return (
    <div>
      <h2>Upload 3 Images</h2>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      {images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          <div>
            {images.map((imageURL, index) => (
              <img key={index} src={imageURL} alt={`Image ${index}`} style={{ width: '150px', height: '150px', margin: '10px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
