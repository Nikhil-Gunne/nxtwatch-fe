import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import { TrendingBottomContainer, TrendingBottomContainerHeader, TrendingContainer, TrendingHeading, TrendingLogo, TrendingVideosContainer, VideoContainer, VideoImage, VideoItem,VideoInfo, VideoTitle,ChannelName, ViewsCount, ChannelNameAndPublishedContainer, ProfileAndInfoContainer, ChannelProfile } from "./styledComponents"
import { MdLocalFireDepartment } from "react-icons/md"
import {formatDistanceToNow} from "date-fns"
import {BsDot} from "react-icons/bs"
import useThemeContext from "../../hooks/useThemeContext"
import LoaderSpinner from "../Loader/Loader"

function Trending() {
    const [videos,setVideos] = useState([])

    const [loading,setLoading] = useState(true)


    const context = useThemeContext()
    const {isDarkMode} = context

    useEffect(() => {
        const fetchData = async () => {
            const user =JSON.parse(localStorage.getItem("user"))
            // console.log(user,"tren")
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${user.token}` 
                }
            }
            const response = await fetch("/api/trendingvideos", options)
            const jsonResponse = await response.json()
            if(response.ok){
                setVideos([...jsonResponse.trendingVideosList])
                setLoading(false)
                console.log(jsonResponse)
            }
        }
        fetchData()
    },[])

    return <TrendingContainer>
        <Sidebar />
        <TrendingBottomContainer>
            <TrendingBottomContainerHeader isDarkMode={isDarkMode}>
                <TrendingLogo isDarkMode={isDarkMode}>
                    <MdLocalFireDepartment size={20} color={"red"} />
                </TrendingLogo>
                <TrendingHeading isDarkMode={isDarkMode}>Trending</TrendingHeading>
            </TrendingBottomContainerHeader>
            <TrendingVideosContainer isDarkMode={isDarkMode}>
                <VideoContainer>
                    {loading&&<LoaderSpinner />}
                        {
                            videos&&videos.map(video=>{
                                const publishedDate = formatDistanceToNow(new Date(video.published_at),{addSuffix : true})
                                return <Link to={`/videoplayer/${video.id}`} style={{ 'text-decoration': "none" }} key={video.id}>
                                    <VideoItem key={video.id}>
                                    <VideoImage src={video.thumbnail_url} alt={video.title} />
                                    <ProfileAndInfoContainer>
                                        <ChannelProfile src={video.channel.profile_image_url} />
                                    <VideoInfo>
                                        <VideoTitle isDarkMode={isDarkMode}>{video.title}</VideoTitle>
                                        <ChannelNameAndPublishedContainer>
                                        <ChannelName isDarkMode={isDarkMode}>{video.channel.name}</ChannelName>
                                        <ViewsCount isDarkMode={isDarkMode}>{video.view_count} views<BsDot size={20}/>{publishedDate.slice(publishedDate.indexOf(" "),)}</ViewsCount>
                                        </ChannelNameAndPublishedContainer>
                                    </VideoInfo>
                                    </ProfileAndInfoContainer>
                                    </VideoItem>
                                    </Link>
                                
                        })
                    }
                    
                </VideoContainer>
            </TrendingVideosContainer>

        </TrendingBottomContainer>

    </TrendingContainer>

}

export default Trending