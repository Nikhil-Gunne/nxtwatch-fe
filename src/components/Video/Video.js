import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ChannelImage, ChannelImageAndTitleContainer, ChannelName, ChannelNameAndPublishedContainer, VideoImage, VideoInfo, VideoItem, VideoTitle, ViewsCount } from "./styledComponents"
import { BsDot } from "react-icons/bs"
import useThemeContext from "../../hooks/useThemeContext"

const Video = (props) => {
    const { isDarkMode } = useThemeContext()
    const { video } = props
    const publishedDate = formatDistanceToNow(new Date(video.published_at), { addSuffix: true })
    return <VideoItem>
        <Link to={`/videoplayer/${video.id}`} style={{ 'text-decoration': "none" }}>
            <VideoImage src={video.thumbnail_url} alt="thumbnail" />
            <ChannelImageAndTitleContainer>
                <ChannelImage src={video.channel.profile_image_url} alt="profile" />
                <VideoInfo>
                    <VideoTitle isDarkMode={isDarkMode}>{video.title}</VideoTitle>
                    <ChannelNameAndPublishedContainer>
                    <ChannelName isDarkMode={isDarkMode}>{video.channel.name}</ChannelName>
                    <ViewsCount isDarkMode={isDarkMode}>{video.view_count} views <BsDot size={20} />{publishedDate.slice(publishedDate.indexOf(" "),)}</ViewsCount>
                    </ChannelNameAndPublishedContainer>
                </VideoInfo>
            </ChannelImageAndTitleContainer>
        </Link>
    </VideoItem>



}

export default Video