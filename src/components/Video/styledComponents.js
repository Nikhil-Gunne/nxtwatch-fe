import styled from "styled-components"

export const VideoItem = styled.li`
width:32%;
margin-bottom:20px;
@media screen and (max-width:575px){
    width:100%;
}
`

export const VideoImage = styled.img`
    width:100%;
`

export const ChannelImageAndTitleContainer = styled.div`
width:100%;
display:flex;
align-items:flex-start;
margin-top:8px;
`

export const ChannelImage = styled.img`
width:30px;
margin:8px;
`

export const VideoInfo = styled.div`
font-family:"Roboto";
margin-left:5px;
height:120px;
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width:575px){
   height:60px;
}
`

export const VideoTitle = styled.p`
margin:5px;
font-size:14px;
color:${props=>props.isDarkMode?"#ebebeb":"#475569"} ;
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
margin:5px;
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
`

export const ViewsCount =styled.p`
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
font-size:12px;
display:flex;
align-items:center;
margin:5px;
`