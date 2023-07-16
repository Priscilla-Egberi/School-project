import React, {createContext, useState} from 'react'


const CheckHomContext = createContext()

export function CheckHomContext() {
    const [checks, setChecks] = useState('true');

  return (
    <CheckHomContext.Provider value={[checks, setChecks]}>
      
    </CheckHomContext.Provider>
  )
}

export default CheckHomContext;
