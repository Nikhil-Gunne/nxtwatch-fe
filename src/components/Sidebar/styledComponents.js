import styled from "styled-components"

export const SidebarContainer = styled.div`
width:20vw;
min-height:90vh;
background-color:${props=>props.isDarkMode?"#0f0f0f":""};
@media screen and (max-width:575px){
    display:none;
}
`
export const SidebarContentContainer = styled.div`
height:90vh;
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
`
export const SidebarList = styled.ul`
list-style-type:none;
margin-top:0;
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
font-weight:${props=>props.isActive?400:null}
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

export const ContactUsHeading = styled.h3`
color:#1e293b;
font-family:"Roboto";
margin-bottom:10px;
color:${props =>props.isDarkMode?"#ffffff":""};

`
export const SocialsImage=styled.img`
width:30px;
margin:5px;
`

export const SidebarBottomText = styled.p`
color: #64748b;
font-family:"Roboto";
color:${props =>props.isDarkMode?"#ffffff":""};

`