import React from 'react'
import SearchComponent from "../components/SearchComponent";
import DropDown from "../components/Goods/DropDown"

function Goods() {
  return (
    <div>Goods
        <div className="flex flex-col md:flex-row items-center justify-between g-y-5">
        <SearchComponent variant="gradient" size="sm" fullWidth className="md:hidden mb-5"/>
        <DropDown />
        </div>
    </div>
  )
}

export default Goods