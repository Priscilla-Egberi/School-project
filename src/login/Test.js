import React from 'react'
import axiosInstance from './Axios';

axiosInstance.get('https://campus-buy.vercel.app/user').then((res) => {
  console.log(res.data);
});

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test