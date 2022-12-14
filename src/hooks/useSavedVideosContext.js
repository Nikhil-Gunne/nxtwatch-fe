import { useContext } from "react"
import { SavedVideosContext } from "../context/SavedvideosContext"

const useSavedVideosContext = () =>{
    const context = useContext(SavedVideosContext)
    if(!context){
        throw Error('cannot use outside')
    }

    return context

}

export default useSavedVideosContext