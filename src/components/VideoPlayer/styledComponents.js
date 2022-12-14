import styled from "styled-components"

export const VideoContainer = styled.div`
    display:flex;
    @media screen and (max-width:575px){
        height:100vh;
    }
`

export const VideoPlayerContainer = styled.div`
background-color:${props=>props.isDarkMode?"#181818":"#f9f9f9"};
width:100%;
padding-left:20px;
padding-right:20px;
padding-top:10px;
`

export const VideoTitle = styled.p`
margin-top:20px;
margin-bottom:10px;
margin-left:5px;
font-size:14px;
font-family:"Roboto";
color:${props=>props.isDarkMode?"#ebebeb":"#475569"} ;
`
export const ViewsAndLikeContainer = styled.div`
display:flex;
justify-content:space-between;
@media screen and (max-width:575px){
    flex-direction:column;
}
`
export const ViewsCount =styled.p`
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
font-size:12px;
display:flex;
align-items:center;
margin:5px;
font-family:"Roboto";
`

export const ButtonsContainer = styled.div`
display:flex;
@media screen and (max-width:575px){
    margin-top:10px;
    gap:10;
}
`

export const LikeButton = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer;
color: ${props =>{
    // console.log(props.isVideoLiked)
    if(props.isDarkMode){
        if(props.isVideoLiked){
            return "blue"
        }
        return "#94a3b8"
    }else{
        if(props.isVideoLiked){
            return "blue"
        }
        return "#383838"
    }
}
};
`
export const DisLikeButton = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer;

color: ${props =>{
    console.log(props.isVideoDisLiked)
    if(props.isDarkMode){
        if(! props.isVideoDisLiked){
            return "#94a3b8"
        }
        return "red"
    }else{
        if(! props.isVideoDisLiked){
            return "#383838"
        }
        return  "red"
    }
}}
`

export const SaveButton = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer;

color: ${props =>{
    if(props.isDarkMode){
        if(props.isVideoPresent){
            return "blue"
        }
        return "#94a3b8"
    }else{
        if(props.isVideoPresent){
            return "blue"
        }
        return "#383838"
    }
}
};
`

export const ChannelInfoContainer = styled.div`
display:flex;
align-items:flex-start;
margin-top:10px;
`

export const ChannelProfileImage =styled.img`
width:40px;
margin-top:10px;
`

export const DescriptionContainer = styled.div`
font-family:"Roboto";
margin-left:5px;
padding-top:5px;
`

export const ChannelName =styled.p`
font-size:12px;
margin:10px;
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
`

export const SubscribersCount = styled.p`
color: ${props =>props.isDarkMode?"#94a3b8":"#383838"};
font-size:10px;
padding:0;
margin:10px;
`

export const Description =styled.p`
font-size:14px;
margin-top:30px;
margin-left:10px;
color:${props=>props.isDarkMode?"#ffffff":"#475569"};
`