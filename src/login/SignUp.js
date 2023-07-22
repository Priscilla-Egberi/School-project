import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function SignUpForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
      });
    
      const [users, setUsers] = useState([]);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Create an object with the user data to be sent in the request body
        const userData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
      
        // Make the POST request using Axios
        axios.post('https://campus-buy.vercel.app/user/create/', userData)
          .then((response) => {
            // Handle the successful response here if needed
            console.log('Response:', response.data);
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
          });
      
        // Resetting the form fields
        setFormData({
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
        });
      };
      
      
      useEffect(() => {
        console.log(users); // Log users whenever it changes
      }, [users]);
  return (
    <>
	
      {/* <!-- component --> */}
<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-orange-700 to-my-orange i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Get Empowered</h1>
			<p className="text-white mt-1">Show what you have. Get what you need</p>
			<Link to="/login" className="block w-28 bg-white text-orange-800 mt-4 py-2 rounded-2xl font-bold mb-2">Login</Link>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={handleSubmit} className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Already have an account? <Link to="/login" className="text-my-orange hover:text-black cursor-pointer ">Login</Link></p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				 <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="first name"
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                            />
      </div>
<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				 <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="last name"
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                            />
      </div>			
<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				 <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            />
      </div>			
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
                        <input
                            className="pl-2 outline-none border-none"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            />
						
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
                            <input
                                className="pl-2 outline-none border-none"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                />
							
      </div>
							<button type="submit" className="block w-full bg-my-orange mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
							
		</form>
	</div>
</div>
    </>
  )
}

export default SignUpForm