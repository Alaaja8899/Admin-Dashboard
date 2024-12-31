import React, { createContext, useContext, useState } from 'react'

const context = createContext();

function GlobalContext({children}) {
    const [PathUrl,setPathUrl] = useState('/upload') 
const [Menue,setMenue] = useState(true)

    const values = {PathUrl,setPathUrl, Menue, setMenue}
  return (
    <context.Provider value={values}>
        {children}
    </context.Provider>
  )
}



export const useGlobalContext=()=>{
    return useContext(context)
}


export default GlobalContext
