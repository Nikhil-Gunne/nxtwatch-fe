import styled from "styled-components"

export const TrendingContainer = styled.div`
display:flex;
min-height:80vh;

`
export const TrendingBottomContainer = styled.div`
width:100%;
`

export const TrendingBottomContainerHeader=styled.div`
background-color: ${props =>props.isDarkMode ?"#313131":"#f1f5f9"};
height:80px;
display:flex;
align-items:center;
padding-left:48px;
@media screen and(max-width:575px){
    width:100%;
}
`

export const TrendingLogo = styled.div`
width:60px;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background-color:${props =>props.isDarkMode?"#000000":"#d7dfe9"};
border-radius:60px;
`

export const TrendingHeading = styled.h2`
font-family:"Roboto";
margin-left:10px;
color:${props=>props.isDarkMode?"#ffffff":null};
`
export const TrendingVideosContainer=styled.div`
background-color:${props => props.isDarkMode ? "#000000":"#f8fafc"};
min-height:70vh;
padding:10px;
@media screen and (max-width:575px){
    padding:0;
    margin-top:0;
}

`

export const VideoContainer = styled.ul`
list-style-type:none;
padding-left:30px;
width:90%;
@media screen and (max-width:575px){
    padding-left:0;
    margin-top:0;
    padding-top:10px;
}
`
export const VideoItem = styled.li`
display:flex;
margin:10px;
@media screen and (max-width:575px){
    flex-direction:column;
    width:100%;
}
` 
export const VideoImage = styled.img`
width:40%;
@media screen and (max-width:575px){
    width:100%;
}
`
export const ChannelProfile = styled.img`
width:30px;
align-self:start;
margin-top:10px;
@media screen and (min-width:575px){
    display:none;
}
`
export const ProfileAndInfoContainer = styled.div`
display:flex;
justify-content:flex-start;
padding:10px;
`

export const VideoInfo = styled.div`
font-family:"Roboto";
margin-left:10px;
`

export const VideoTitle = styled.h1`
margin:10px;
font-size:14px;
color:${props=>props.isDarkMode?"#ffffff":"#475569"} ;
`

export const ChannelNameAndPublishedContainer = styled.div`
display:flex;
flex-direction:column;
@media screen and (max-width:575px){
    flex-direction:row;
    align-items:center;
}
`

export const ChannelName =styled.p`
font-size:12px;
margin:10px;
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
`

export const ViewsCount =styled.p`
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
font-size:12px;
display:flex;
align-items:center;
margin:10px;
`