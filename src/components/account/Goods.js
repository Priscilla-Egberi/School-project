import React from 'react'

function Goods() {
  return (
    <div>
    <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Goods</p>
    <div className="mx-10">
            <div className="flex flex-row gap-x-4">
                <p>Available</p>
                <p>Not-available</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
            {/* card 1 */}
            <div className="max-w-xs p-5 flex flex-row justify-center items-center rounded shadow-lg">
                <div className='rounded-full bg-my-lightorange p-3'>
                <img src='https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
                </div>
                <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Sell Product</h1>
                <p className="text-center">Sell both new and fairly used products of any kind</p>
            </div>
            {/* card 2 */}
            <div className="max-w-xs p-5 flex flex-row justify-center items-center rounded shadow-lg">
                <div className='rounded-full bg-my-lightorange p-3'>
                <img src='https://img.freepik.com/free-vector/cheerful-cute-dog-white-background_1308-132745.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-5 h-5' />
                </div>
                <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Offer Service</h1>
                <p className="text-center">Render any kind of service you can offer to anyone</p>
            </div>
            </div>
        </div>
    </div>







   
  )
}

export default Goods