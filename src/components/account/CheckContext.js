import React, {createContext, useState} from 'react'


const CheckContext = createContext()

export function CheckProvider () {
    const [check, setCheck] = useState('true');

  return (
    <CheckContext.Provider value={[check, setCheck]}>
    </CheckContext.Provider>
  )
}

export default CheckContext;