import React, {createContext, useState} from 'react'


const CheckContext = createContext()

export function CheckProvider({children}) {
    const [check, setCheck] = useState('true');

  return (
    <CheckContext.Provider value={[check, setCheck]}>
      {children}
    </CheckContext.Provider>
  )
}

export default CheckContext;