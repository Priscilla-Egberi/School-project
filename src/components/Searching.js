import React, { useState, useMemo } from "react";
import CardSearch from "./CardSearch";

function Searching({ data }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) {
      return data; // Return the original data if search is empty
    }

    return data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);

  return (
    <>
      <div className="flex items-center w-full bg-orange-900">
        <div className="border border-orange-200 w-full rounded-md">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search..."
            className="block w-full px-4 py-2 text-purple-700 bg-white border  rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <CardSearch
                key={item.id} // Replace 'id' with the unique identifier in your data
                cardId={item.id} // Replace 'id' with the unique identifier in your data
                name={item.name}
                amount={item.amount}
                type={item.type}
                detail={item.imgUrl[0]}
              />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Searching;
