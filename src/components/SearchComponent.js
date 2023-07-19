import React from "react";

export default function SearchComponent(props) {
    return (
        <div className={props.className}>
            <div className="flex items-center w-full bg-orange-900">
            <div className="flex border border-orange-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                {/* <button className="px-4 text-white  border-l rounded " style={{backgroundColor:"#EB6B39"}}>
                    Search
                </button> */}
            </div>
        </div>
        </div>
    );
}