
import {Link, useLocation} from "react-router-dom"
import { ContactUsContainer, ContactUsHeading, SidebarBottomText, SidebarContainer, SidebarContentContainer, SidebarElements, SidebarList, SidebarText, SocialsImage } from "./styledComponents"
import {AiFillHome} from "react-icons/ai"
import {MdLocalFireDepartment,MdPlaylistAdd} from "react-icons/md"
import {SiYoutubegaming} from "react-icons/si"
import useThemeContext from "../../hooks/useThemeContext"


function Sidebar(){
    

    const context = useThemeContext()

    const {isDarkMode} = context 

    
    const location  = useLocation()
    // console.log(location.pathname)

    // console.log(currentUrl)

    
    

    return <SidebarContainer isDarkMode={isDarkMode}>
        <SidebarContentContainer>
        <SidebarList>
            <Link to="/" style={{"text-decoration":"none"}}>
            <SidebarElements isActive={location.pathname==="/"} isDarkMode={isDarkMode} key="home" >
                <AiFillHome size={20} color={location.pathname==="/"?"red":""} margin={0}/>
                <SidebarText isDarkMode={isDarkMode}>Home</SidebarText>
            </SidebarElements>
            </Link>
            <Link to="/trending" style={{"text-decoration":"none"}}>
            <SidebarElements isActive={location.pathname==="/trending"} isDarkMode={isDarkMode} key="trending">
                <MdLocalFireDepartment size={20} color={location.pathname==="/trending"?"red":""}/>
                <SidebarText isDarkMode={isDarkMode}>Trending</SidebarText>
            </SidebarElements>
            </Link>
            <Link to="/gaming" style={{"text-decoration":"none"}}>
            <SidebarElements isActive={location.pathname==="/gaming"} isDarkMode={isDarkMode} key="gaming">
                <SiYoutubegaming size={20} color={location.pathname==="/gaming"?"red":""}/>
                <SidebarText isDarkMode={isDarkMode}>Gaming</SidebarText>
            </SidebarElements>
            </Link>
            <Link to="/savedvideos" style={{"text-decoration":"none"}}>
            <SidebarElements isActive={location.pathname==="/savedvideos"} isDarkMode={isDarkMode} key="saved videos">
                <MdPlaylistAdd size={20} color={location.pathname==="/savedvideos"?"red":""}/>
                <SidebarText isDarkMode={isDarkMode}>Saved videos</SidebarText>
            </SidebarElements>
            </Link>
            
        </SidebarList>
        <ContactUsContainer>
            <ContactUsHeading isDarkMode={isDarkMode}>Contact Us</ContactUsHeading>
            <SocialsImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="facebook logo"/>
            <SocialsImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter logo"/>
            <SocialsImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linked in logo"/>
            <SidebarBottomText isDarkMode={isDarkMode}>Enjoy! Now to see your channels and recommendatios!</SidebarBottomText>
        </ContactUsContainer>
        </SidebarContentContainer>
    </SidebarContainer>

}

export default (Sidebar)