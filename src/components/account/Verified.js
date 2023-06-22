import React from 'react'

function Verified() {
  return (
    <div>
      <p className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>Verification</p>
      
        <div className="mx-auto mt-14 max-w-sm p-5 flex flex-col justify-center items-center ">
            <div className='rounded-full bg-my-lightorange p-6'>
            <img src='https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&ga=GA1.2.1841543944.1687297578&semt=sph' alt='' className='w-10 h-10' />
            </div>
            <h1 className="my-3 text-xl font-bold tracking-tight text-gray-900 text-center">Verified</h1>
            <p className="text-center">Your Account is Currently verified</p>
            
        </div>
       
      </div>
  )
}

export default Verified