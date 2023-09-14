import React, {useState, useContext, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import CheckContext from './CheckContext';
import FieldWithSaveButton from './FieldWithSaveButton';
import axios from 'axios';
import { UserContext } from '../../login/UserContext';

// const defaultImageSrc ='data:image/png;base64,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'

export function BodyAccount () {

  const { user, setUser } = useContext(UserContext);

  
  useEffect(() => {
    const refreshAccessToken = async () => {
      const refresh_token = localStorage.getItem('refresh_token');
      if (refresh_token) {
        try {
          // Send a refresh request to get a new access token
          const response = await axios.post('https://campus-buy.onrender.com/api/token/refresh/', {"refresh": refresh_token });
          localStorage.setItem('access_token', response.data.access);
		console.log('token has been refreshed')
        } catch (error) {
          // Handle refresh token error (e.g., if refresh token has expired)
          // You may want to redirect the user to the login page or handle it in another way
          console.error('Error refreshing access token:', error);
        }
      }
    };
    // Refresh the token every minute (adjust the interval as needed)
    const tokenRefreshInterval = setInterval(refreshAccessToken, 6 * 1000); // 60 seconds * 1000 milliseconds
    // Cleanup the interval when the component unmounts
    return () => clearInterval(tokenRefreshInterval);
  }, []); // Empty dependency array means this effect runs once when the component mounts




  useEffect(() => {
    // Function to get the access token from localStorage
    const getAccessToken = () => localStorage.getItem('access_token');

    // Axios instance with dynamic Authorization header
    const axiosAuthorized = axios.create({
      baseURL: 'https://campus-buy.onrender.com', // Adjust the base URL accordingly
      headers: {
        Authorization: getAccessToken() ? `Bearer ${getAccessToken()}` : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    axiosAuthorized
      .get('/user')
      .then((res) => {
        setUser(res.data);
        console.log('Response', res.data)
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }, [setUser]); // Adding setUser to the dependency array to prevent unnecessary re-fetching
  console.log('User', user)

    const [check, setCheck] = useContext(CheckContext)
    console.log(check)

    function handleChange() {
        setCheck(prevCheck => !prevCheck);
      }

 const [uploadedImage, setUploadedImage] = useState(user.profile_image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Once the image is loaded, update the state with the uploaded image
      setUploadedImage(reader.result);
    };

    if (file) {
      // Read the uploaded image as a data URL
      reader.readAsDataURL(file);
    }
  };
    
  return (
    <div>
      <div className='py-3 px-16 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900 flex items-center justify-between'>
        My Profile
        <div className="inline">
                  <input type="checkbox" id="toggle" className="hidden" onChange={handleChange} value={check} />
                  <label htmlFor="toggle"><FaBars size={32} className="ml-3  lg:hidden" id="openSidebar"/></label>
          </div>
        </div>
          <div className='my-4 px-16 flex flex-row items-center'>
          <div
      className="flex justify-center items-center max-w-96 min-w-54 max-h-36 min-h-54 rounded-full overflow-hidden bg-gray-700 border-4 border-gray-700 my-0 mr-4"
      onClick={() => {
        // Clicking on the div opens the file input
        document.getElementById('imageInput').click();
      }}
    >
      <img
        src={uploadedImage}
        alt=""
        className="max-w-96 min-w-54 max-h-36 min-h-54 object-cover object-center"
      />

      {/* The file input element is hidden and triggered when the div is clicked */}
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">{user.first_name}{' '}{user.last_name}</h1>
                    <p>{user.reg_no}</p>
                  </div>
          </div>
      {/* tables */}
      <div className="mx-8 md:mx-16 grid md:grid-cols-2 gap-16">
                        {/* table 1 */}
                        <div className="border border-gray-300 rounded">
                    <h1 className="px-5 py-2 border-b border-gray-300 text-xl font-bold tracking-tight text-gray-900">
                      Information
                    </h1>
                    {/* <FieldWithSaveButton label="Display name" type="text" /> */}
                    <FieldWithSaveButton label="Department" type="text" />
                    <FieldWithSaveButton label="Level" type="text" />
                    <FieldWithSaveButton label="Campus" type="text" />
                    {/* <FieldWithSaveButton label="Password" type="password" /> */}
                  </div>

                      {/* table 2 */}
                      <div className="border border-gray-300 rounded">
                    <h1 className="px-5 py-2 border-b border-gray-300 text-xl font-bold tracking-tight text-gray-900">
                      Information
                    </h1>
                    <FieldWithSaveButton label="Facebook Handle" type="text" />
                    <FieldWithSaveButton label="Whatsapp" type="text" />
                    {/* <FieldWithSaveButton label="Email" type="email" /> */}
                    <FieldWithSaveButton label="Instagram" type="text" />
                    <FieldWithSaveButton label="Phone Number" type="text" />
                  </div>
       
      </div>
      <div className="md:hidden h-56"></div>
    </div>
  )
}

export default BodyAccount;