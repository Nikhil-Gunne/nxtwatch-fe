import {useState} from "react"
import useAuthContext from "./useAuthContext"
import useFetchReactedVideos from "./useFetchReactedVideos"
import useFetchSavedVideos from "./useFetchSavedVideo"

function useLogin(){
    const [error,setError] = useState({})

    const [isLoading,setIsLoading] = useState(false)

    const context = useAuthContext()

    const {fetchVideos} = useFetchSavedVideos()

    const {fetchReactedVideos} = useFetchReactedVideos()

    const login = async (email,password) =>{
        const options = {
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }
        
            setIsLoading(true)
            const response = await fetch("https://nxtwatch-api.onrender.com/api/user/login",options)
            // console.log(response)
            const jsonResponse = await response.json()
            // console.log(jsonResponse,1)
            if(response.ok){
                setIsLoading(false)
                setError({})
                context.dispatch({type:"LOGIN",payload:jsonResponse})
                //storing in localstorage
                localStorage.setItem("user",JSON.stringify(jsonResponse))
                // fetches the saved videos in the db and stores in local storage
                fetchVideos()
                // fetches the reacted videos in the db and stores in local storage
                fetchReactedVideos()

            }
            
        
        else{
            setIsLoading(false)
            setError(jsonResponse)
            // console.log(jsonResponse)
        }
        
        
    }
    return {login,error,isLoading}

}

export default useLogin