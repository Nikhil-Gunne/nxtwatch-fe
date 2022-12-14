const useRemoveVideo = () =>{

    const remove = async (id) =>{
        const user =JSON.parse(localStorage.getItem('user'))
        console.log(user)
        const options ={
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        }
        const response = await fetch(`/addvideos/${id}`,options)
        //console.log("removed")
        if (response.ok){
            const videos = JSON.parse(localStorage.getItem("videos"))
            //console.log(id,"ab")
            const updatedVideos = videos.filter(video=>video.id !== id)
            //console.log(updatedVideos,"uv")
            localStorage.setItem("videos",JSON.stringify(updatedVideos))
        }
        
    }

    return {remove}

}

export default useRemoveVideo