
import { createContext,useEffect , useState } from "react"


export const ThemeContext = createContext() 

export function ThemeContextProvider ({children}) {
    const [isDarkMode,setDarkMode] = useState(false)

    useEffect(()=>{
        const mode = JSON.parse(localStorage.getItem('isDarkMode'))
        setDarkMode(mode)
    },[])

    
    
    const handleTheme = () =>{
        if(isDarkMode){
            setDarkMode(false)
            localStorage.setItem('isDarkMode',"false")
        }else{
            setDarkMode(true)
            localStorage.setItem('isDarkMode',"true")
        }
        
    }
    // console.log(isDarkMode)
    return <ThemeContext.Provider value={{isDarkMode,handleTheme}}>
        {children}
    </ThemeContext.Provider>

}

