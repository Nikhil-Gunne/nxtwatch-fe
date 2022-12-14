import {createContext, useReducer,useEffect} from "react"

export const AuthContext = createContext()

const authReducer = (state,action) =>{
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return {user:null}
        default:
            return state
    }

}

export function AuthContextProvider({children}){
    const [state,dispatch] = useReducer(authReducer,{user:null})
    // console.log(state)

    useEffect(()=>{
       
            const user = localStorage.getItem("user")
            if(user){
                dispatch({type:"LOGIN",payload:JSON.parse(user)})
            }

       

    },[dispatch])

    
    return <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
}