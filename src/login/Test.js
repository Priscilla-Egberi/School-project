import React from 'react'
import axiosInstance from './Axios';

axiosInstance.get().then((res) => {
  console.log(res.data);
});

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test