import React, { useState } from 'react'
import countContext from './context'
export default function Provider({children}) {
    const [count,setCount] = useState(0)
  return (
    <countContext.Provider value={{count,setCount}}>
        {children}
    </countContext.Provider>
  )
}
