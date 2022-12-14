import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import { ButtonsContainer, ChannelInfoContainer, ChannelProfileImage, DescriptionContainer, LikeButton,DisLikeButton, VideoContainer, VideoPlayerContainer, VideoTitle, ViewsAndLikeContainer, ViewsCount ,ChannelName, SubscribersCount, Description, SaveButton} from "./styledComponents"
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from "date-fns"
import {BsDot} from "react-icons/bs"
import {AiOutlineLike,AiOutlineDislike} from "react-icons/ai"
import {MdPlaylistAdd} from "react-icons/md"
import useThemeContext from "../../hooks/useThemeContext"
import useSavedVideosContext from "../../hooks/useSavedVideosContext"
import Loader from "../Loader/Loader"
import { useReactedVideosContext } from "../../hooks/useReactedVideosContext"

let publishedDate = null



function VideoPlayer(props){
    const [video,setVideo] = useState(null)

    const [isVideoLiked,setLiked] = useState(false)

    const [isVideoDisLiked,setDisLiked] = useState(false)

    const [isVideoPresent,setIsVideoPresent]=useState(false)

    const [isLoading,setLoading] = useState(true)



    const {id} = useParams()

    const {isDarkMode} = useThemeContext()

    const {dispatch} = useSavedVideosContext()

    const {dispatch:dispatch2} = useReactedVideosContext()

    // console.log(videos,"po")

    if(video){
        publishedDate = formatDistanceToNow(new Date(video.published_at), { addSuffix: true })
    }
    
    useEffect(()=>{
        const fetchData = async() =>{
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user,"vp")

            const options = {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${user.token}`
                }
            }

            const response = await fetch(`/videosplayer/${id}`,options);
            console.log(response)
            const jsonResponse = await response.json()
            if(response.ok){
                setVideo(jsonResponse.video)
                // console.log(jsonResponse)
                setLoading(false)
            }else{
                setLoading(false)
            }

        }

        fetchData()

        const checkIsVideoHasReaction = () =>{
            // console.log("usecalled")
            const reactedVideos =  JSON.parse(localStorage.getItem("reactedvideos"))
            if(reactedVideos){
                const videos = reactedVideos.find(reactedVideo => reactedVideo.video_id ===id)
                // console.log(videos,"rv")
                if(videos){
                    // console.log("abc")
                    if(videos.reaction_type==="liked"){
                       
                        
                        // console.log(isVideoLiked)
                        setLiked(true)
                        setDisLiked(false)
                    }
                    else{
                        setDisLiked(true)
                        setLiked(false)
                    }
                }
                
    
            }
            return 
        }
    
        checkIsVideoHasReaction()
        // function to check whether the video is present in saved videos list
        
        const checkIsCurrentVideoPresent = () =>{
            const videos = JSON.parse(localStorage.getItem("videos"))
            // console.log(videos)
            if(videos.length){
                const index = videos.findIndex(obj =>obj.id === id)
                if(index>=0){
                    setIsVideoPresent(true)
                    
                }
                else{
                    setIsVideoPresent(false)
                }
            }
        }

        checkIsCurrentVideoPresent()

    },[id])


    // function add video to saved videos list
    const handleAddVideo = async () =>{
        console.log("adding")
        const user = JSON.parse(localStorage.getItem('user'))
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${user.token}`
            },
            body:JSON.stringify(video)
        }
        const response = await fetch("/addvideos",options)
        // console.log(response,2);
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        if(response.ok){
            dispatch({type:"ADD_VIDEO",payload:video})
            const videos = JSON.parse(localStorage.getItem("videos"))
            const updatedVideos = [...videos,video]
            localStorage.setItem("videos",JSON.stringify(updatedVideos))
            setIsVideoPresent(true)
        }
    }

    

    

    //function to check is video already reacted
    const checkIsCurentVideoAlreadyReacted = () =>{
        console.log("checking")
        const reactedVideos = JSON.parse(localStorage.getItem("reactedvideos")); 
        // console.log(reactedVideos)
        if(reactedVideos){
            const videoPresent = reactedVideos.find(vid =>vid.video_id===video.id)
            if(videoPresent){
                
                return true
            }
            return false
        }
        return false

    }

    // function to add videos to reacted videos
    
    const handleLike = async (reaction) =>{
        const user = JSON.parse(localStorage.getItem('user'))
        const reactedVideo = {
            video_id:video.id,
            reaction_type: reaction
        }

        const present =checkIsCurentVideoAlreadyReacted()
        if(present){
            console.log("ispresent")
            // console.log(reactedVideo,"gg")
            const options = {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${user.token}`
                },
                body:JSON.stringify(reactedVideo)
            }
            const response = await fetch(`/reactedvideos/${video.id}`,options)
            const jsonResponse = await response.json()
            // console.log(jsonResponse,"op")
            if(response.ok){
                dispatch2({type:"UPDATE_VIDEO",payload:reactedVideo})

                const reactedVideos = JSON.parse(localStorage.getItem("reactedvideos")); 
                // console.log(reactedVideos,2)
                const updatedVideos = reactedVideos.filter(vid=>vid.video_id!==jsonResponse.responseVideo.video_id)
                
                console.log(updatedVideos)
                localStorage.setItem("reactedvideos",JSON.stringify([...updatedVideos,reactedVideo]))
                if(reaction==="liked"){
                    setLiked(true)
                    setDisLiked(false)
                }
                else{
                    setLiked(false)
                    setDisLiked(true)
                }
            }

        }
        else{
            const options = {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${user.token}`
                },
                body:JSON.stringify(reactedVideo)
            }
            const response = await fetch("/reactedvideos",options)
            console.log(response,4);
            const jsonResponse =await response.json()
            if(response.ok){
                const reactedVideos = JSON.parse(localStorage.getItem("reactedvideos")); 
                const updatedVideos = [...reactedVideos,jsonResponse.responseVideo]
                localStorage.setItem("reactedvideos",JSON.stringify(updatedVideos))
                dispatch2({type:"ADD_VIDEO",payload:jsonResponse.responseVideo})
                if(reaction==="liked"){
                    setLiked(true)
                    setDisLiked(false)
                }
                else{
                    setLiked(false)
                    setDisLiked(true)
                }
            }

        }
        
    }

    /*function check is user reacted to video
    const checkIsVideoHasReaction = () =>{
        const reactedVideos =  JSON.parse(localStorage.getItem("reactedvideos"))
        if(reactedVideos){
            const videos = reactedVideos.find(reactedVideo => reactedVideo.video_id ===video.id)
            console.log(videos,"rv")
            if(videos){
                console.log("abc")
                if(videos.reaction_type==="liked"){
                    console.log(isVideoLiked)
                    return true
                }
                else{
                    return false
                }
            }
            

        }
        return 
    }*/


   

    return <VideoContainer>
        <Sidebar />
        <VideoPlayerContainer isDarkMode={isDarkMode}>
            {
                isLoading && <Loader isDarkMode={isDarkMode}/>
            }
        {
            video && (<>
            <ReactPlayer url = {video.video_url} width={"100%"}  controls={true}/>
            <VideoTitle isDarkMode={isDarkMode}>{video.title}</VideoTitle>
            <ViewsAndLikeContainer>
                <ViewsCount isDarkMode={isDarkMode}>{video.view_count} views <BsDot size={20} />{publishedDate.slice(publishedDate.indexOf(" "),)}</ViewsCount>
                <ButtonsContainer>
                    <LikeButton disabled={isVideoLiked} isDarkMode={isDarkMode} onClick={()=>handleLike("liked")} isVideoLiked={isVideoLiked}>
                        <AiOutlineLike/>
                        
                        {isVideoLiked?"Liked":"Like"}
                    </LikeButton>
                    <DisLikeButton disabled={isVideoDisLiked} isDarkMode={isDarkMode} onClick={()=>handleLike("disliked")} isVideoDisLiked={isVideoDisLiked}>
                        <AiOutlineDislike />
                        {isVideoDisLiked?"DisLiked":"Dislike"}
                    </DisLikeButton>
                    <SaveButton isDarkMode={isDarkMode} onClick = {handleAddVideo} disabled={isVideoPresent} isVideoPresent={isVideoPresent}>
                        <MdPlaylistAdd size={20}/>
                        {isVideoPresent?"saved":"save"}
                    </SaveButton>
                </ButtonsContainer>
            </ViewsAndLikeContainer>
            <hr />
            <ChannelInfoContainer>
                <ChannelProfileImage src={video.channel.profile_image_url} alt="channel profile" />
                <DescriptionContainer>
                <ChannelName isDarkMode={isDarkMode}>{video.channel.name}</ChannelName>
                <SubscribersCount isDarkMode={isDarkMode}>{video.channel.subscriber_count}   Subscribers</SubscribersCount>
                <Description isDarkMode={isDarkMode}>{video.description}</Description>
                </DescriptionContainer>
            </ChannelInfoContainer>
             </>)
        }
        </VideoPlayerContainer>
    </VideoContainer>
}


export default VideoPlayer