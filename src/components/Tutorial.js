import React from 'react'
import TutorialCards from "./TutorialCards"

function Body() {
  return (
    <>
    {/* Electronics */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tutorials</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <TutorialCards detail="Engine Maths" />
      <TutorialCards detail="GST 211" />
      <TutorialCards detail="CHE 211" />
      <TutorialCards detail="GRE 211" />
      
      {/* <!-- More products... --> */}
    </div>
  </div>
    </div>


    {/* Jewelries/clothing */}
    <div classNameName="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <TutorialCards detail="Engine Maths" />
      <TutorialCards detail="GST 211" />
      <TutorialCards detail="CHE 211" />
      <TutorialCards detail="GRE 211" />
      

      {/* <!-- More products... --> */}
    </div>
  </div>
</div>
    </>
  )
}

export default Body