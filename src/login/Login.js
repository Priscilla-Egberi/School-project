import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function Login() {
	// const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
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
          username: formData.username,
          password: formData.password,
        };
      

        // Make the POST request using Axios
        axios.post('https://campus-buy.vercel.app/api/token/', userData)
    .then((response) => {
      // Handle the successful response here
      console.log('Response:', response.data);
      console.log('Status code:', response.status); // Get the status code
    //   navigate('/login')
    
    
    })
    .catch((error) => {
      // Handle errors here
      console.error('Error:', error);
      const values = error.response.data
      const valuesArray = Object.values(values)
      // let errorStr = ''
      // valuesArray.map((value) => (
      //   value.forEach((val)=>errorStr += `${val} \n`)
      // ))
      // alert(errorStr)
      console.log(valuesArray)


      console.error('Status code:', error.response ? error.response.status : 'Unknown'); // Get the status code from the error response (if available)
    });
      
        // Resetting the form fields
        setFormData({
          username: '',
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
			<Link to="/login/signup" className="block w-28 bg-white text-orange-800 mt-4 py-2 rounded-2xl font-bold mb-2">Sign up</Link>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={handleSubmit} className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">You don't have an account? <Link to="/login/signup" className="text-my-orange hover:text-black cursor-pointer">Sign up</Link></p>
			
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
							<button type="submit" className="block w-full bg-my-orange mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span className="text-sm ml-2 hover:text-my-orange cursor-pointer">Forgot Password ?</span>
		</form>
	</div>
</div>
    </>
  )
}

export default Login