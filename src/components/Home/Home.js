import { useState,useEffect } from "react"
import Sidebar from "../Sidebar/Sidebar"
import { BannerAndVideosContainer, BannerContainer, HomeContainer, BannerLogo, BannerText, GetItNowButton, BannerLogoAndCloseContainer, CloseButton, VideosContainer, SearchBar, SearchBarAndIconContainer, SearchButton, VideosList, NoVideosContainer ,NoVideosImage, NoVideosText, ChangeSearchText,RetryButton} from "./styledComponents"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"
import Video from "../Video/Video"
import useThemeContext from "../../hooks/useThemeContext"
import LoaderSpinner from "../Loader/Loader"

function Home() {
    const [showBanner, setShowBanner] = useState(true)

    const [searchInput,setSearchInput] = useState("")

    const [videos,setVideosList] = useState([])

    const [loading,setLoading] = useState(true)

    const {isDarkMode} = useThemeContext() 

    useEffect(()=>{
        const fetchVideos =async() =>{
            const user =JSON.parse(localStorage.getItem("user"))
            //console.log(user,"home")

            const options ={
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${user.token}` 
                }
            }
            const response = await fetch("https://nxtwatch-api.onrender.com/api/videos",options)
            const jsonResponse = await response.json()
            if(response.ok){
                //console.log(jsonResponse)
                setVideosList(jsonResponse.videosList)
                setLoading(false)
            }

        }
        fetchVideos()
    },[])

    const handleSearch = event => setSearchInput(event.target.value)

    const filteredList = videos.filter(video=>video.title.toLowerCase().includes(searchInput.toLowerCase()))

    
    const handleRetry = () => setSearchInput("")

    return <HomeContainer>
        <Sidebar />
        <BannerAndVideosContainer>
            {showBanner && (<BannerContainer>
                <BannerLogoAndCloseContainer>
                    <BannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="logo" />
                    <CloseButton onClick={() => setShowBanner(false)}><AiOutlineClose size={20} /></CloseButton>
                </BannerLogoAndCloseContainer>
                <BannerText>Buy Nxt watch premium prepaid plans with upi</BannerText>
                <GetItNowButton>Get it now</GetItNowButton>
            </BannerContainer>)}
            <VideosContainer isDarkMode={isDarkMode}>
                <SearchBarAndIconContainer>
                    <SearchBar type="search" value={searchInput} isDarkMode={isDarkMode} onChange={handleSearch} placeholder="search" />
                    <SearchButton><AiOutlineSearch size={20} color={isDarkMode?"white":""}/></SearchButton>
                </SearchBarAndIconContainer>
                {loading&&<LoaderSpinner />}
                {
                    filteredList.length>0 ? (<VideosList>
                        {
                            filteredList.map(video=><Video key={video.id} video={video}/>)
                        }
                    </VideosList>)
                    :(<NoVideosContainer>
                    <NoVideosImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
                    <NoVideosText isDarkMode={isDarkMode}>No Search Results  found</NoVideosText>
                    <ChangeSearchText isDarkMode={isDarkMode}>Try different words or remove the search filter</ChangeSearchText>
                    <RetryButton onClick={handleRetry}>Retry</RetryButton>
                </NoVideosContainer>)
                }
            </VideosContainer>
        </BannerAndVideosContainer>
    </HomeContainer>
}


export default Home
