import { useReactedVideosContext } from "./useReactedVideosContext"

const useFetchReactedVideos = () =>{

    const {dispatch} = useReactedVideosContext()
    const fetchReactedVideos = async () =>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        const options = {
            method:"GET",
            headers:{
                "Authorization":`Bearer ${user.token}`
            }   
        }
        const response = await fetch("/reactedvideos",options)
        // console.log(response,5);
        const jsonResponse =await response.json()
        console.log(jsonResponse)
        if(response.ok){
            dispatch({type:"ADD_VIDEOS",payload:[...jsonResponse.reactedVideos]})
            localStorage.setItem("reactedvideos",JSON.stringify(jsonResponse.reactedVideos))
        }
    }

    return {fetchReactedVideos}

}


export default useFetchReactedVideos