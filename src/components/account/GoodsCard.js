import React from 'react'

function GoodsCard() {
  return (
    <div className="max-h-40 py-4 flex flex-row justify-between border-b-2 border-gray text-gray-500 font-semibold">
                <div className='flex flex-row'>
                      <img src='https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                      alt='' className='h-full rounded mr-4' />
                      <div className="flex flex-col justify-between">
                        <div className="text-sm">
                            <p className="text-gray-700 text-base">Shirt</p>
                            <p>Red color</p>
                            <p>Large</p>
                        </div>
                            <p>$100</p>
                      </div>
                </div>

                <div className="flex flex-col justify-between text-right">
                  <p>...</p>
                  <p className="text-blue-700">Not Available</p>
                </div>
            </div>
  )
}

export default GoodsCard