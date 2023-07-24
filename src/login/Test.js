import React from 'react'
import axiosInstance from './Axios';

axiosInstance.get('/api/data')
    .then((response) => {
        // Handle successful response
        console.log(response.data);
    })
    .catch((error) => {
        // Handle error
        console.error(error);
    });

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test