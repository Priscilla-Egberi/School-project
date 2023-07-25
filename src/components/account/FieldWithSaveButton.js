import React, { useState } from 'react';

const FieldWithSaveButton = ({ label, type }) => {
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (editMode) {
      // Call your API endpoint here to save the input value
      console.log(`Saving ${label}:`, inputValue);
      // Assuming your API call is asynchronous, you can handle the response here
      // e.g., if (response.ok) { /* Success handling */ } else { /* Error handling */ }
    }
    setEditMode(!editMode);
  };

  return (
    <div className="px-5 my-5">
      <div className="flex flex-row justify-between">
        <input
          className="px-2 py-1 border rounded w-full min-w-[200px] md:min-w-[280px]"
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={label}
          readOnly={!editMode}
        />
        <button
          className="bg-gray-300 hover:bg-gray-600 font-semibold text-sm hover:text-gray-200 py-2 px-3 rounded"
          onClick={handleSave}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default FieldWithSaveButton;
