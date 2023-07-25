import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <div className={props.className} id={props.cardId}>
      <Link to={`/${props.cardId}`}>
        <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">          
          <img src={props.detail} alt="Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {props.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{props.type}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{props.amount}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Cards