import React from 'react'
import {Link} from 'react-router-dom'

function AddNewItemOptions() {
  return (
    <>
            <div className="mt-16 flex flex-row justify-center">
        {/* card 1 */}
        <Link to="/account/additems/goods" className="max-w-xs p-5 flex flex-col justify-center items-center rounded shadow-lg mr-5">
            <div className='rounded-full bg-my-lightorange p-3'>
            <img src='https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Sell Product</h1>
            <p className="text-center">Sell both new and fairly used products of any kind</p>
        </Link>
        {/* card 2 */}
        <Link to="/account/additems/services" className="max-w-xs p-5 flex flex-col justify-center items-center rounded shadow-lg ml-5">
            <div className='rounded-full bg-my-lightorange p-3'>
            <img src='https://img.freepik.com/free-vector/cheerful-cute-dog-white-background_1308-132745.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Offer Service</h1>
            <p className="text-center">Render any kind of service you can offer to anyone</p>
        </Link>
      </div>
    
    </>
  )
}

export default AddNewItemOptions