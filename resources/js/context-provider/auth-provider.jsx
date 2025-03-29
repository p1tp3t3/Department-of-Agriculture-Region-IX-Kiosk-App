import { createContext, useState } from "react"


const AuthContext = createContext()

export function AuthProvider ({ children , usr , athTyp }) {
    return (
        <AuthContext.Provider value={{ usr , athTyp }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext