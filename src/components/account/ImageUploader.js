import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
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

    // Pass the images back to the AddGoods component
    onImageUpload(validImages);
  };

  console.log(images)
  return (
    <div className="max-w-xl">
      <label
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        <span className="flex items-center space-x-2">
          {/* ... Remaining JSX code ... */}
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
              alt={`Image ${index}`}
              style={{ width: '150px', height: '150px', margin: '10px' }}
            />
          ))}
        </div>
      )}
      {/* ... Remaining JSX code ... */}
    </div>
  );
};

export default ImageUploader;


//     <button
//       className="w-full mt-4 rounded-sm text-center py-3 text-white bg-my-orange"
//       onClick={() => onPost({ images, imagePreviews })} // Call the callback function with the data
//     >
//       Post
//     </button>
//     </div>
//   );
// };

// export default ImageUploader;
