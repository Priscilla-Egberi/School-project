import React, {useState} from "react";

const SearchInput = ({ data }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setSearchValue(inputValue);
  
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
  
      setFilteredData(filteredResults);
    };

    return (
        <div className={props.className}>
            <div className="flex items-center">
            <div className="flex border border-orange-200 rounded">
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    
                />
                <button className="px-4 text-white  border-l rounded " style={{backgroundColor:"#EB6B39"}}>
                    Search
                </button>
            </div>
        </div>
        </div>
    );
}