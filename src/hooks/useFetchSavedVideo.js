
const useFetchSavedVideos = () =>{
    const fetchVideos = async () =>{
        const user =JSON.parse(localStorage.getItem('user'))
        const options ={
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${user.token}`
            }
        }
        const response = await fetch("/addvideos",options)
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
        if(response.ok){
            localStorage.setItem("videos",JSON.stringify(jsonResponse.videos))
        }
    }

    return {fetchVideos}
}

export default useFetchSavedVideos