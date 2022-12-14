import { useContext } from "react"
import { ReactedVideosContext } from "../context/ReactedVideosContext"


export const useReactedVideosContext =()=>{
    const context = useContext(ReactedVideosContext)
    if(!context){
        throw Error("cannot use outside provider")
    }
    return context
}