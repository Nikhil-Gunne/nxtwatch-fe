import {Link} from "react-router-dom"
import {useEffect,useState} from "react"
import { GamingBottomContainer, GamingBottomContainerHeader, GamingContainer, GamingHeading, GamingLogo, GamingVideosContainer, VideoImage, VideoItem, VideosList, VideoTitle, ViewsCount } from "./styledComponents"
import Sidebar from "../Sidebar/Sidebar"
import {SiYoutubegaming} from "react-icons/si"
import useThemeContext from "../../hooks/useThemeContext"

function Gaming(){
    const [videos,setVideos] = useState([])

    const context = useThemeContext()
    const {isDarkMode} = context 

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user,"gaming")
        const fetchData = async() =>{
            const options = {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${user.token}`
                }
            }
            const response = await fetch("/api/gamingvideos",options)
            const jsonResponse = await response.json()
            console.log(jsonResponse)
            if(response.ok){
                setVideos([...jsonResponse.videos])
            }
        }

        fetchData()

    },[])

    return <GamingContainer>
        <Sidebar />
        <GamingBottomContainer>
            <GamingBottomContainerHeader isDarkMode={isDarkMode}>
                <GamingLogo isDarkMode={isDarkMode}>
                <SiYoutubegaming size={20} color={"red"}/>
                </GamingLogo>
                <GamingHeading isDarkMode={isDarkMode}>Gaming</GamingHeading>
            </GamingBottomContainerHeader>
            <GamingVideosContainer isDarkMode={isDarkMode}>
                <VideosList>
            {
                videos&& videos.map(video=>{

                    return <VideoItem key={video.id}>
                        <Link to={`/videoplayer/${video.id}`} style={{ 'text-decoration': "none" }}>
                        <VideoImage src={video.thumbnail_url} alt="thumbnail" />
                        <VideoTitle isDarkMode={isDarkMode}>
                            {video.title}
                        </VideoTitle>
                        <ViewsCount isDarkMode={isDarkMode}>{video.view_count} Watching WorldWide</ViewsCount>
                        </Link>
                        
                    </VideoItem>
                })
            }
            </VideosList>
            </GamingVideosContainer>
        </GamingBottomContainer>
    </GamingContainer>

}

export default Gaming