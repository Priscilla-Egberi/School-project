import React, {createContext, useState} from 'react'


const MyContext = createContext()

export function CheckProvider () {
    const [check, setCheck] = useState('true');
    
 
    function handleChange() {
      setCheck(prevCheck => !prevCheck);
    }

  return (
    <MyContext.Provider value={[check, setCheck]}>
    </MyContext.Provider>
  )
}

export default MyContext;