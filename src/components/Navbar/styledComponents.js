import styled from "styled-components"

export const NavbarContainer = styled.div`
height:10vh;
display:flex;
justify-content:space-between;
align-items:center;
padding-left:60px;
padding-right:60px;
background-color:${props=>props.isDarkMode?"#0f0f0f":"#ffffff"};
@media screen and (max-width:575px){
    padding-left:10px;
    padding-right:10px;
    height:60px;
}
`

export const Logo = styled.img`
width:70px;
@media screen and (max-width:575px){
    width:90px;
}
`

export const LoginAndSignupButtonsContainer = styled.div`
display:flex;
align-items:center;
`

export const NavbarSignupButton = styled.button`
background-color: #3b82f6;
width:70px;
height:22px;
color:#ffffff;
font-family:"Roboto";
border:none;
border-radius:5px;
margin-left:15px;
`

export const LogoutButtonContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:10vh;
width:150px;
padding:0;
`
export const ThemeButton = styled.button`
background-color:transparent;
border:none;
padding:0;
margin:0;
`

export const ProfileImage = styled.img`
width:20px;
margin:0;
@media screen and (max-width:575px){
    display:none;
}
`

export const LogoutButton = styled.button`
border:1px solid #3b82f6;
color:#3b82f6;
font-family:"Roboto";
width:60px;
height:25px;
border-radius:4px;
background-color:transparent;
`

export const Modal =styled.div`
position:fixed;
height:100vh;
width:100vw;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.5);
`


export const ModalContent = styled.div`
background-color:#ffffff;
width:300px;
height:130px;
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;

`

export const ModalText=styled.p`
font-family:"Roboto";
`
export const ButtonsContainer=styled.div`
`
export const OkButton = styled.button`
background-color:transparent;
border: 1px solid #3b82f6;
color:#3b82f6;
font-family:"Roboto";
margin:10px;
border-radius:20px;
width:60px;
cursor:pointer;
`

export const CancelButton = styled.button`
background-color:transparent;
border: 1px solid #3b82f6;
color:#3b82f6;
font-family:"Roboto";
margin:10px;
width:60px;
border-radius:20px;
cursor:pointer;
`

export const MenuButton = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
border:none;
@media screen and (min-width:576px){
    display:none
}
`
export const MenuModal = styled.div`
position:fixed;
height:100vh;
width:100vw;
top:0;
left:0;
`


export const MenuModalContent = styled.div`
position:absolute;
height:100vh;
width:100vw;
top:0;
left:0;
background-color:${props =>props.isDarkMode?"#000000":"#ffffff"};
display:flex;
flex-direction:column;
padding-top:50px;
`


export const MenuCloseButton = styled.button`
background-color:transparent;
align-self:flex-end;
margin-right:10px;
border:none;
`

export const SidebarList = styled.ul`
list-style-type:none;
margin-top:100px;
padding-left:0;

`

export const SidebarElements = styled.li`
display:flex;
align-items:center;
padding-left:40px;
height:30px;
cursor:pointer;
background-color:${props =>{
    if(props.isDarkMode){
        if(props.isActive){
            return "#424242"
        }
        return "transparent"
    }else{
        if(props.isActive){
            return "#e2e8f0"
        }
        return "transparent"
    }
}};
color:${props =>props.isDarkMode?"#f1f5f9":""};
font-weight:${props=>props.isActive?400:null};
cursor:pointer;
`
export const SidebarText = styled.p`
font-size:16px;
font-family:"Roboto";
margin:0;
padding-left:20px;
color:${props =>props.isDarkMode?"#ffffff":"#000000"};
`
export const ContactUsContainer = styled.div`
padding-left:10px;
padding-right:10px;
`