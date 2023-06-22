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
            <div className="max-w-xs py-4 flex flex-row justify-center border-b-2 border-gray">
                <div className='flex flex-row'>
                      <img src='https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                      alt='' className='h-full' />
                      <div className="flex flex-col justify-evenly">
                        <p>Shirt</p>
                        <p>Red color</p>
                        <p>Large</p>
                      </div>
                </div>

                <div className="flex flex-col justify-between">
                  <p>...</p>
                  <p className="">Not Available</p>
                </div>
                
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