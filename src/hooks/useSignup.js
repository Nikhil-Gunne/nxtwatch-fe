import {useState} from "react"
import useAuthContext from "./useAuthContext"
import useFetchReactedVideos from "./useFetchReactedVideos"
import useFetchSavedVideos from "./useFetchSavedVideo"

function useSignup(){
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    const context = useAuthContext()

    const {fetchVideos} = useFetchSavedVideos()

    const {fetchReactedVideos} = useFetchReactedVideos()


    const signup = async (email,password) =>{
        const options = {
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }
        
            setIsLoading(true)
            const response = await fetch("https://nxtwatch-api.onrender.com/api/user/signup",options)
            const jsonResponse = await response.json()
            if(response.ok){
                setIsLoading(false)
                setError({})
                console.log(response)
                localStorage.setItem("user",JSON.stringify(jsonResponse))
                context.dispatch({type:"LOGIN",payload:jsonResponse})
                // fetches the saved videos in the db and stores in local storage
                fetchVideos()
                // fetches the reacted videos in the db and stores in local storage
                fetchReactedVideos()
            }
            
        
        else{
            setIsLoading(false)
            setError(jsonResponse)
            console.log(jsonResponse)
        }
        
        
    }
    return {signup,error,isLoading}

}

export default useSignup