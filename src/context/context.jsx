import { createContext, useContext, useState } from "react";
export const GlobalContext = createContext();



const AppContext =({children})=>{
    const [user,setUser]=useState("Faiz")
    const [show,setShow]=useState(false)
    return <GlobalContext.Provider value={{
        user,setUser,show,setShow
    }}>
        {children}
    </GlobalContext.Provider>
}


export default AppContext;