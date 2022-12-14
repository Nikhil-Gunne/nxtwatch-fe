import styled from "styled-components"

export const HomeContainer = styled.div`
    display:flex;
`

export const BannerAndVideosContainer = styled.div`
    width:100%;
`

export const BannerContainer = styled.div`
    background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size:cover;
    height:120px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding:20px;

`
export const BannerLogoAndCloseContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
export const BannerLogo = styled.img`
    width:100px;
`
export const BannerText = styled.p`
    font-size:14px;
    font-family:"Roboto";
`
export const CloseButton =styled.button`
    background-color:transparent;
    border:none;
`
export const GetItNowButton = styled.button`
background-color:transparent;
color:#231f20;
border: 1px solid #231f20;
width:100px;
height:25px;
`
export const VideosContainer = styled.div`
background-color:${props=>props.isDarkMode?"#181818":"#f9f9f9"};
min-height:85vh;
padding:24px;
`

export const SearchBarAndIconContainer = styled.div`
    width:40%;
    height:30px;
    border:1px solid #909090;
    display:flex;
    @media screen and (max-width:575px){
        width:100%;
    }
`
export const SearchBar = styled.input`
    width:80%;
    height:30px;
    cursor:pointer;
    border:none;
    padding-left:10px;
    font-family:"Roboto";
    outline:none;
    color:${props=>props.isDarkMode?"#ffffff":""};
    background-color:${props=>props.isDarkMode?"transparent":""}
`
export const SearchButton = styled.button`
background-color:transparent;
border:1px solid #909090;
border-top:none;
border-bottom:none;
border-right:none;
height:30px;
width:20%;
`
export const VideosList = styled.ul`
margin-top:10px;
padding-left:0;
list-style-type:none;
display:flex;
align-items:flex-start;
flex-wrap:wrap;
gap:10px;
@media screen and (max-width:575px){
    flex-direction:column;
    margin-top:20px;
}
`

export const NoVideosContainer = styled.div`
height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:575px){
    height:50vh;
}
`

export const NoVideosImage = styled.img`
width:30%;
@media screen and (max-width:575px){
    width:50%;
}
`

export const NoVideosText = styled.h1`
font-family:"Roboto";
color:${props=>props.isDarkMode?"#ffffff":"#000000"};
font-size:20px;
margin-top:20px;
`

export const ChangeSearchText = styled.p`
font-family:"Roboto";
color:${props=>props.isDarkMode?"#94a3b8":"#000000"};
font-size:16px;
margin-top:10px;
`

export const RetryButton = styled.button`
background-color:#4f46e5;
border:1px solid  #4f46e5;
width:80px;
height:26px;
border-radius:40px;
color:#ffffff;
cursor:pointer;
`