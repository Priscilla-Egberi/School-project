import React, {useState} from "react";
import CardSearch from "./CardSearch"

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
                {/* <button className="px-4 text-white  border-l rounded " style={{backgroundColor:"#EB6B39"}}>
                    Search
                </button> */}
            </div>
        </div>
        
        <div classNameName="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {filteredData.map((item, index) => (
            <CardSearch key={index} name={item.name} amount={item.amount} type={item.type} detail={item.imgUrl[0]} />
            
        ))}
         </div>
    </div>
        </>
    );
}

export default SearchInput;