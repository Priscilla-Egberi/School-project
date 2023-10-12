import React from 'react'


function GoodsCard({amount, name, category, detail }) {
  return (
    <div className="max-h-40 py-4 flex flex-row justify-between border-b-2 border-gray text-gray-500 font-semibold">
                <div className='flex flex-row'>
                      <img src={detail}
                      alt='' className='h-full rounded mr-4' />
                      <div className="flex flex-col justify-between">
                        <div className="text-sm">
                            <p className="text-gray-700 text-base">{name}</p>
                            <p>New</p>
                            <p>{category}</p>
                        </div>
                            <p>{amount}</p>
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