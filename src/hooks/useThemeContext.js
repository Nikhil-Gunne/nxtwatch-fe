import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"



function useThemeContext () {
    const context = useContext(ThemeContext)
    if(!context){
        throw Error("cannot use outside theme context provider")
    }
    return context
}

export default useThemeContext