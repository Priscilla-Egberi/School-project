import React, { useEffect, useContext } from 'react';
// import axiosInstance from './Axios';
import { UserContext } from './UserContext';

function Test() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Function to get the access token from localStorage
    const getAccessToken = () => localStorage.getItem('access_token');

    // Axios instance with dynamic Authorization header
    const axiosAuthorized = axios.create({
      baseURL: 'https://campus-buy.vercel.app', // Adjust the base URL accordingly
      headers: {
        Authorization: getAccessToken() ? `Bearer ${getAccessToken()}` : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    axiosAuthorized
      .get('/user')
      .then((res) => {
        console.log(res.data)
        setUser(res.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }, []);

  console.log(user);

  return (
    <div>Test</div>
  );
}

export default Test;
