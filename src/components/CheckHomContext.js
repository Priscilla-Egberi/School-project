import React, {createContext, useState} from 'react'


const CheckHomContext = createContext()

export function CheckHomProvider({children}) {
    const [checks, setChecks] = useState('true');

  return (
    <CheckHomContext.Provider value={[checks, setChecks]}>
      {children}
    </CheckHomContext.Provider>
  )
}

export default CheckHomContext;
