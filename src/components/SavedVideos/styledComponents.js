import styled from "styled-components"

export const SavedVideosContainer = styled.div`
display:flex;
min-height:80vh;
`

export const SavedBottomContainer = styled.div`
width:100%;
`

export const SavedBottomContainerHeader=styled.div`
background-color: ${props =>props.isDarkMode ?"#313131":"#f1f5f9"};
height:80px;
display:flex;
align-items:center;
padding-left:48px;

`

export const SavedLogo = styled.div`
width:60px;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background-color:${props =>props.isDarkMode?"#000000":"#d7dfe9"};
border-radius:60px;
`

export const SavedHeading = styled.h2`
font-family:"Roboto";
margin-left:10px;
color:${props=>props.isDarkMode?"#ffffff":null};
`

export const VideosContainer=styled.div`
background-color:${props => props.isDarkMode ? "#000000":"#f8fafc"};
min-height:90vh;
padding:10px;
@media screen and (max-width:575px){
    min-height:80vh;
}
`

export const VideoContainer = styled.ul`
list-style-type:none;
padding-left:30px;
@media screen and (max-width:575px){
    padding-left:0;
}
`
export const VideoItem = styled.li`
display:flex;
margin:10px;
@media screen and (max-width:575px){
    flex-direction:column;
    width:100%;
    margin:0;
}
` 
export const VideoImage = styled.img`
width:350px;
height:200px;
@media screen and (max-width:575px){
    width:100%;
}
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

export const RemoveButton =styled.button`
background-color:transparent;
border:1px solid red;
color:red;
font-family:"Roboto";
width:80px;
height:24px;
border-radius:20px;
margin:10px;
`

export const NoSavedVideosContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:575px){
    height:60vh;
}
`

export const NoSavedVideosImage = styled.img`
width:30%;
@media screen and (max-width:575px){
    width:70%;
}
`

export const NoVideosHeading = styled.h1`
font-family:"Roboto";
color:${props=>props.isDarkMode?"#ffffff":"#000000"};
font-size:20px;
margin-top:20px;
`

export const NoVideosText = styled.p`
font-family:"Roboto";
color:${props=>props.isDarkMode?"#94a3b8":"#000000"};
font-size:16px;
margin-top:10px;
`

export const ProfileAndInfoContainer = styled.div`
display:flex;
justify-content:flex-start;
padding:10px;
`
export const ChannelProfile = styled.img`
width:30px;
align-self:start;
margin-top:10px;
@media screen and (min-width:575px){
    display:none;
}
`

export const ChannelNameAndPublishedContainer = styled.div`
display:flex;
flex-direction:column;
@media screen and (max-width:575px){
    flex-direction:row;
    align-items:center;
}
`
