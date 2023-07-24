import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from './Axios';
import { UserContext } from './UserContext';

function Test() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axiosInstance.get('https://campus-buy.vercel.app/user').then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);

  return (
    <div>Test</div>
  );
}

export default Test;
