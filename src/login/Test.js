import React, {useState, useContext} from 'react'
import axiosInstance from './Axios';
import { UserContext } from './UserContext';

const { user, setUser } = useContext(UserContext);
axiosInstance.get('https://campus-buy.vercel.app/user').then((res) => {
  // console.log(res.data);
  setUser(res.data)
});

console.log(user)

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test