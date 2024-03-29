import React, { useState, useMemo } from "react";
import CardSearch from "./ServiceCards"; // Importing the CardSearch component

function SearchInput({ data }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) {
      return []; // Return an empty array to hide cards when search is empty
    }

    return data.filter((item) =>
      item.service.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);

  const showNoResultsMessage = searchValue.trim() !== "" && filteredData.length === 0;

  return (
    <>
      <div className="flex items-center w-full bg-orange-900">
        <div className="border border-orange-200 w-full rounded-md">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search for services..."
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="">
        <div className="mt-2 mx-5 md:mx-10">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <CardSearch
                key={item.id} // Replace 'id' with the unique identifier in your data
                cardId={item.id} // Use 'cardId' instead of 'id'
                userName={item.name}
                service={item.service}              
                description={item.description}
                userImg={item.img}
              />
            ))
          ) : showNoResultsMessage && (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchInput;
