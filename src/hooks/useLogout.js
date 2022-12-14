import useAuthContext from "./useAuthContext"
import { useReactedVideosContext } from "./useReactedVideosContext"
import useSavedVideosContext from "./useSavedVideosContext"


function useLogout(){
    const context = useAuthContext()
    const {dispatch:dispatch1} = useSavedVideosContext()
    const {dispatch:dispatch2} =useReactedVideosContext()

    
    const logout =()=>{
        context.dispatch({type:"LOGOUT"})
        //removing user from localStorage 
        localStorage.removeItem("user")
        dispatch1({type:"REMOVE_VIDEOS"})
        // removing saved videos from localStorage
        localStorage.removeItem("videos")

        // removing reactedvideos from local storage
        dispatch2({type:"REMOVE_VIDEOS"})
        localStorage.removeItem("reactedvideos") 
    }

    return {logout}
}

export default useLogout