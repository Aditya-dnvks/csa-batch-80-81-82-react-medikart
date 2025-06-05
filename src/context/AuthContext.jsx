import { createContext, useState } from "react";

export const AuthContext = createContext()

export const MyContext = ({children}) => {
    const [login, isLogin] = useState(false)
    
    return(
        <AuthContext.Provider value={{login, isLogin}}>
            {children}
        </AuthContext.Provider>
    )
}