import useThemeContext from "../../hooks/useThemeContext"
import Sidebar from "../Sidebar/Sidebar"
import { SavedBottomContainer, SavedBottomContainerHeader, SavedHeading, SavedLogo, SavedVideosContainer, VideoItem, VideosContainer, VideoImage, VideoInfo, VideoTitle, ChannelName, ViewsCount, VideoContainer, RemoveButton,NoSavedVideosContainer,NoSavedVideosImage,NoVideosHeading,NoVideosText, ProfileAndInfoContainer, ChannelProfile, ChannelNameAndPublishedContainer } from "./styledComponents"
import { MdPlaylistAdd } from "react-icons/md"
import useSavedVideosContext from "../../hooks/useSavedVideosContext"
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs"
import { formatDistanceToNow } from "date-fns"
import { useEffect } from "react"
import useRemoveVideo from "../../hooks/useRemoveVideo"


function SavedVideos() {


    const { isDarkMode } = useThemeContext()

    const { videos, dispatch } = useSavedVideosContext()

    const { remove } = useRemoveVideo()

    useEffect(() => {
        const fetchData = async () => {
            const user = JSON.parse(localStorage.getItem('user'))
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`
                }
            }
            const response = await fetch("/addvideos", options)
            const jsonResponse = await response.json()
            // console.log(jsonResponse)
            if (response.ok) {
                dispatch({ type: "ADD_VIDEOS", payload: jsonResponse.videos })
            }
        }

        fetchData()
    }, [dispatch])

    const handleRemove = async (id) => {
        // console.log("removed");
        // console.log(id,"hr")
        dispatch({ type: "REMOVE_VIDEO", payload: id })
        remove(id)
    }


    return <SavedVideosContainer>
        <Sidebar />
        <SavedBottomContainer isDarkMode={isDarkMode}>
            <SavedBottomContainerHeader isDarkMode={isDarkMode}>
                <SavedLogo isDarkMode={isDarkMode}>
                    <MdPlaylistAdd size={25} color={"red"} />
                </SavedLogo>
                <SavedHeading isDarkMode={isDarkMode}>Saved videos</SavedHeading>
            </SavedBottomContainerHeader>
            <VideosContainer isDarkMode={isDarkMode}>
                <VideoContainer>
                    {
                        videos&&videos.map(video => {
                            const publishedDate = formatDistanceToNow(new Date(video.published_at), { addSuffix: true })
                            return <Link to={`/videoplayer/${video.id}`} style={{ 'text-decoration': "none"}}>
                                <VideoItem key={video.id}>
                                    <VideoImage src={video.thumbnail_url} alt={video.title} />
                                    <ProfileAndInfoContainer>
                                        <ChannelProfile src={video.channel.profile_image_url}/>
                                        <VideoInfo>
                                        <VideoTitle isDarkMode={isDarkMode}>{video.title}</VideoTitle>
                                        <ChannelNameAndPublishedContainer>
                                        <ChannelName isDarkMode={isDarkMode}>{video.channel.name}</ChannelName>
                                        <ViewsCount isDarkMode={isDarkMode}>{video.view_count} views<BsDot size={20} />{publishedDate.slice(publishedDate.indexOf(" "),)}</ViewsCount>
                                        </ChannelNameAndPublishedContainer>
                                        <Link to="/savedvideos"><RemoveButton onClick={() => handleRemove(video.id)}>Remove</RemoveButton></Link>
                                    </VideoInfo>
                                    </ProfileAndInfoContainer>

                                    </VideoItem>
                                </Link>
                        })
                    }
                    {videos.length===0&&(<NoSavedVideosContainer>
                    <NoSavedVideosImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" />
                    <NoVideosHeading isDarkMode={isDarkMode}>No Saved videos  found</NoVideosHeading>
                    <NoVideosText isDarkMode={isDarkMode}>you can save your videos while watching them</NoVideosText>
                    
                </NoSavedVideosContainer>)}

                </VideoContainer>
            </VideosContainer>
        </SavedBottomContainer>
    </SavedVideosContainer>

}

export default SavedVideos