import React, {createContext, useState} from 'react'


const CheckHomeContext = createContext()

export function CheckHomeProvider({children}) {
    const [check, setCheck] = useState('true');

  return (
    <CheckHomeContext.Provider value={[check, setCheck]}>
      {children}
    </CheckHomeContext.Provider>
  )
}

export default CheckHomeContext;