import React from 'react'
import logo from "../images/logo.jpg"

function Footer() {
  return (
    <div className='px-20 py-10 text-white md:grid grid-cols-4 gap-x-20 leading-loose' style={{backgroundColor:"#EB6B39"}}>
      <ul  className="pt-4" style={{listStyle:"circle", listStyleType:"inherit", listStylePosition:"inside"}}>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Terms and Conditions</li>
        <li>Cookies Policy</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="hidden col-span-2 md:grid grid-cols-2 gap-x-3 justify-between bg-white text-black pt-2 px-4">
        <div className="flex flex-col border-r-2">
          <h4 className="mb-2 bold ">Goods</h4>
          <ul style={{listStyle:"circle", listStyleType:"inherit", listStylePosition:"inside"}}>
              <li>Electronics</li>
              <li>Clothing and Jewelries</li>
              <li>School Materials</li>
              <li>Home Utensils</li>
              <li>Health and Beauty</li>
              <li>Others</li>
            </ul>
        </div>
        <div className="flex flex-col  pr-5">
        <h4 className="mb-2 bold ">services</h4>
          <ul style={{listStyle:"circle", listStyleType:"inherit", listStylePosition:"inside"}}>
              <li>Tutoring</li>
              <li>Hair Dressing</li>
              <li>Laptop and Phone Repair</li>
              <li>Catering</li>
              <li>Tech Related Jobs</li>
              <li>Taloring</li>
              <li>Others</li>
            </ul>
        </div>
      </div>

      <div className="hidden pt-4 md:flex flex-col gap-y-4">
        <p>Uniuyo Market is an Online platform set to provide opportunities for Students of the university of uyo exclusively, allowing them to show case goods they want to sell and services they can to render. </p>
        <p>UniUyo Market <img src={logo} alt="logo" className='inline' /></p>
      </div>

    </div>
  )
}

export default Footer