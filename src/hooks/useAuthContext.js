import {useContext} from "react"
import { AuthContext } from "../context/AuthContext"


function useAuthContext(){
    const context = useContext(AuthContext)
    if(!context){
        throw Error("cannot use outside the authcontext provider")
    }
    return context
}

export default useAuthContext