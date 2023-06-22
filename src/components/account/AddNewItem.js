import React from 'react'

function AddNewItem() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Add New Item</p>
      <h1 className="mt-14 mb-7 text-xl font-bold tracking-tight text-gray-900 text-center">What do you want to add?</h1>
      <div className="flex flex-row justify-center">
        {/* card 1 */}
        <div className="max-w-xs p-5 flex flex-col justify-center items-center rounded shadow-lg mr-5">
            <div className='rounded-full bg-my-lightorange p-3'>
            <img src='https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Sell Product</h1>
            <p className="text-center">Sell both new and fairly used products of any kind</p>
        </div>
        {/* card 2 */}
        <div className="max-w-xs p-5 flex flex-col justify-center items-center rounded shadow-lg ml-5">
            <div className='rounded-full bg-my-lightorange p-3'>
            <img src='https://img.freepik.com/free-vector/cheerful-cute-dog-white-background_1308-132745.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Offer Service</h1>
            <p className="text-center">Render any kind of service you can offer to anyone</p>
        </div>
      </div>
      </div>
  )
}

export default AddNewItem

