import React, { useState, useMemo } from "react";
import CardSearch from "./Cards"; // Importing the CardSearch component
import { Link } from "react-router-dom";

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
      item.name.toLowerCase().includes(searchValue.toLowerCase())
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
            placeholder="Search..."
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
            <Link to={`/goods/${item.id}`}>
              <CardSearch
                key={item.id} // Replace 'id' with the unique identifier in your data
                cardId={item.id} // Use 'cardId' instead of 'id'
                name={item.name}
                amount={item.amount}
                condition={item.condition}
                type={item.type}
                detail={item.imgUrl[0]}
              />
              </Link>
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
