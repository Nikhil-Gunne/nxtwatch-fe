import styled from "styled-components"

export const GamingContainer = styled.div`
display:flex;
min-height:80vh;
`

export const GamingBottomContainer = styled.div`
width:100%;
`

export const GamingBottomContainerHeader=styled.div`
background-color: ${props =>props.isDarkMode ?"#313131":"#f1f5f9"};
height:80px;

display:flex;
align-items:center;
padding-left:48px;

`

export const GamingLogo = styled.div`
width:60px;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background-color:${props =>props.isDarkMode?"#000000":"#d7dfe9"};
border-radius:60px;
`

export const GamingHeading = styled.h2`
font-family:"Roboto";
margin-left:10px;
color:${props=>props.isDarkMode?"#ffffff":null};
`

export const GamingVideosContainer=styled.div`
background-color:${props => props.isDarkMode ? "#000000":"#f8fafc"};
min-height:70vh;
padding:10px;
`

export const VideosList = styled.ul`
list-style-type:none;
display:flex;
flex-wrap:wrap;
`

export const VideoItem =styled.li`
width:30%;
margin:10px;
@media screen and (max-width:575px){
    width:40%;
}
`
export const VideoImage = styled.img`
width:90%;
`

export const VideoTitle =styled.h2`
font-size:14px;
margin:0;
padding-left:10px;
color:${props=>props.isDarkMode?"#ffffff":"#000000"};
`

export const ViewsCount = styled.p`
font-size:12px;
padding-left:10px;
color:${props => props.isDarkMode?"#475569":"#000000"}
`