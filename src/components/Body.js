import React from 'react'
import Cards from "./Cards"
import {IoArrowForwardSharp} from "react-icons/io5"

function Body() {
  return (
    <>
    {/* Electronics */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Electronics</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards detail="https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Cards detail="https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Cards className={"hidden md:block"} detail="https://images.unsplash.com/photo-1617775047746-5b36a40109f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwaHVtaWRpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </div>
  </div>
    </div>


    {/* Jewelries/clothing */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Jewelries and Clothing</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>    
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Cards detail="https://images.unsplash.com/photo-1617775047746-5b36a40109f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwaHVtaWRpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards className={"hidden md:block"} detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />      
    </div>
  </div>
</div>

{/* school materials */}
<div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">School materials</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>    
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Cards detail="https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />      
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards className={"hidden md:block"} detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />      
    </div>
  </div>
</div>

{/* Health and Beauty */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Health and Beauty</h2>
      <p className='flex flex-row items-center'>See more <IoArrowForwardSharp className="ml-1" /></p>
      </div>
    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
      <Cards detail="https://images.unsplash.com/photo-1617775047746-5b36a40109f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwaHVtaWRpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <Cards className={"hidden md:block"} detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />      
    </div>
  </div>
</div>
    </>
  )
}

export default Body