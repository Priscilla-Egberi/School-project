import React from 'react'
import {Outlet} from 'react-router-dom'

function AddNewItem() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Add New Item</p>
      <h1 className="mt-14 mb-7 text-xl font-bold tracking-tight text-gray-900 text-center">What do you want to add?</h1>
        <Outlet />
      </div>
  )
}

export default AddNewItem

