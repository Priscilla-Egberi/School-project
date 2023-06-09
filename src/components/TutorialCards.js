import React from 'react'

function Cards(props) {
  return (
    <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <div className='flex items-center justify-center h-full bg-my-orange'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">{props.detail} </h2>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                2hr Class
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500"></p>
          </div>
          <p className="text-sm font-medium text-gray-900">$3</p>
        </div>
      </div>
  )
}

export default Cards