import React from 'react'
import axiosInstance from './Axios';

axiosInstance.get('/user').then((res) => {
  console.log(res.data);
});

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test