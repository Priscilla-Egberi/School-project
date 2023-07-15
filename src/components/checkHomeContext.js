import React, {createContext, useState} from 'react'


const CheckHomeContext = createContext()

export function CheckHomeProvider({children}) {
    const [checks, setChecks] = useState('true');

  return (
    <CheckHomeContext.Provider value={[checks, setChecks]}>
      {children}
    </CheckHomeContext.Provider>
  )
}

export default CheckHomeContext;