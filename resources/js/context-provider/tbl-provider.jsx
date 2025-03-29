import { createContext } from "react";

const TblContext = createContext()

export function TblProvider({ children, setter }) {
    return (
        <TblContext.Provider value={{ setter }}>
            {children}
        </TblContext.Provider>
    )
}
export default TblContext