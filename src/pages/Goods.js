import React from 'react'
import SearchComponent from "../components/SearchComponent";
import DropDown from "../components/Goods/DropDown"

function Goods() {
  return (
    <div>Goods
        <div className="flex flex-row items-center justify-center">
        <SearchComponent variant="gradient" size="sm" fullWidth className="hidden md:block mb-5"/>
        <DropDown />
        </div>
    </div>
  )
}

export default Goods