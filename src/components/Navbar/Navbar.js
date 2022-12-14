import { useState } from "react"
import { LoginAndSignupButtonsContainer, NavbarContainer, Logo, NavbarSignupButton, LogoutButtonContainer, ThemeButton, ProfileImage, LogoutButton, Modal, ModalContent, ModalText, ButtonsContainer, CancelButton, OkButton, MenuButton, MenuModalContent, MenuCloseButton, SidebarList, SidebarElements, SidebarText, MenuModal } from "./styledComponents"
import { Link } from "react-router-dom"
import useAuthContext from "../../hooks/useAuthContext"
import { IoMdMoon } from "react-icons/io"
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai"
import { MdLocalFireDepartment, MdPlaylistAdd, MdOutlineLightMode } from "react-icons/md"
import { SiYoutubegaming } from "react-icons/si"
import useThemeContext from "../../hooks/useThemeContext"
import useLogout from "../../hooks/useLogout"

function Navbar() {
    const [showLogoutModal, setLogoutModal] = useState(false)

    const [showMenuModal, setMenuModal] = useState(false)

    const context = useAuthContext()
    const { user } = context

    const themeContext = useThemeContext()
    const { isDarkMode, handleTheme } = themeContext

    const currentUrl = window.location.href.split("/")

    const { logout } = useLogout()

    const handleModal = () => setLogoutModal(true)

    const handleLogout = () => {
        logout()
        setLogoutModal(false)
    }

    const closeMenuModal = () =>{
        setMenuModal(false)
    }




    const appLogo = isDarkMode ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
    return <NavbarContainer isDarkMode={isDarkMode}>
        <Logo src={appLogo} alt="logo" />
        {!user ? (<LoginAndSignupButtonsContainer>
            <ThemeButton onClick={handleTheme}>{isDarkMode ? <MdOutlineLightMode margin={4} color={"white"} size={20} /> : <IoMdMoon size={20} margin={0} />}</ThemeButton>
            <NavbarSignupButton><Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>Login</Link></NavbarSignupButton>
            <NavbarSignupButton><Link to="/signup" style={{ textDecoration: "none", color: "#fff" }}>Sign up</Link></NavbarSignupButton>
        </LoginAndSignupButtonsContainer>) :
            (
                <LogoutButtonContainer>
                    <ThemeButton onClick={handleTheme}>{isDarkMode ? <MdOutlineLightMode margin={4} color={"white"} size={20} /> : <IoMdMoon size={20} margin={0} />}</ThemeButton>
                    <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                    <MenuButton onClick={() => setMenuModal(!showMenuModal)}><AiOutlineMenu size={20} color={isDarkMode ? "#ffffff" : "#000000"} /></MenuButton>
                    <LogoutButton onClick={handleModal}>Logout</LogoutButton>
                </LogoutButtonContainer>
            )
        }
        {
            showLogoutModal && <Modal isDarkMode={isDarkMode}>
               
                <ModalContent>
                    <ModalText>Are you sure,you want to logout?</ModalText>
                    <ButtonsContainer>
                        <CancelButton onClick={() => setLogoutModal(false)}>No</CancelButton>
                        <OkButton onClick={handleLogout}>yes</OkButton>
                    </ButtonsContainer>
                </ModalContent>
            </Modal>
        }
        {
            showMenuModal && <MenuModal>
                <MenuModalContent isDarkMode={isDarkMode}>
                <MenuCloseButton onClick={() => setMenuModal(false)}>
                    <AiOutlineClose size={30} color={isDarkMode ? "#ffffff" : "#000000"} />
                </MenuCloseButton>
                <SidebarList>
                    <Link to="/" style={{ "text-decoration": "none" }}>
                        <SidebarElements onClick={closeMenuModal} isActive={currentUrl[(currentUrl.length) - 1] === ""} isDarkMode={isDarkMode} key="home" >
                            <AiFillHome size={20} color={currentUrl[(currentUrl.length) - 1] === "" ? "red" : ""} margin={0} />
                            <SidebarText isDarkMode={isDarkMode}>Home</SidebarText>
                        </SidebarElements>
                    </Link>
                    <Link to="/trending" style={{ "text-decoration": "none" }}>
                        <SidebarElements onClick={closeMenuModal} isActive={currentUrl.includes("trending")} isDarkMode={isDarkMode} key="trending">
                            <MdLocalFireDepartment size={20} color={currentUrl.includes("trending") ? "red" : ""} />
                            <SidebarText isDarkMode={isDarkMode}>Trending</SidebarText>
                        </SidebarElements>
                    </Link>
                    <Link to="/gaming" style={{ "text-decoration": "none" }}>
                        <SidebarElements onClick={closeMenuModal} isActive={currentUrl.includes("gaming")} isDarkMode={isDarkMode} key="gaming">
                            <SiYoutubegaming size={20} color={currentUrl.includes("gaming") ? "red" : ""} />
                            <SidebarText isDarkMode={isDarkMode}>Gaming</SidebarText>
                        </SidebarElements>
                    </Link>
                    <Link to="/savedvideos" style={{ "text-decoration": "none" }}>
                        <SidebarElements onClick={closeMenuModal} isActive={currentUrl.includes("savedvideos")} isDarkMode={isDarkMode} key="saved videos">
                            <MdPlaylistAdd size={20} color={currentUrl.includes("savedvideos") ? "red" : ""} />
                            <SidebarText isDarkMode={isDarkMode}>Saved videos</SidebarText>
                        </SidebarElements>
                    </Link>

                </SidebarList>
            </MenuModalContent>
            </MenuModal>

        }
    </NavbarContainer>
}


export default Navbar