import styled from "styled-components"

export const LoginFormContainer = styled.div`
height:90vh;
display:flex;
justify-content:center;
align-items:center;
background-color:${props =>props.isDarkMode?"#000000":"#f9f9f9"};
`
export const LogoAndFormContainer = styled.div`
width:30vw;
min-height:50vh;

display:flex;
flex-direction:column;
align-items:center;
box-shadow: ${props=>props.isDarkMode?"":"0px 2px 2px 2px #bfbfbf"};
background-color: ${props =>props.isDarkMode?"#0f0f0f":"#f8fafc"};
padding:20px;
border-radius:6px;

@media screen and (max-width:575px){
    width:80vw;
    justify-content:center;
    min-height:40vh;
}
`

export const LoginForm = styled.form`
width:70%;
display:flex;
flex-direction:column;
align-items:flex-start;
`
export const AppLogo = styled.img`
width:100px;
margin-bottom:20px;
`
export const LabelElement = styled.label`
color:${props=>props.isDarkMode?"#ffffff":"#1e293b"};
font-family:"Roboto";
margin-bottom:5px;
font-size:12px;
`

export const InputElement = styled.input`
width:90%;
height:25px;
padding-left:10px;
margin-bottom:10px;
border:1px solid ${props =>props.emptyField === true?"red":null};
cusor:pointer;
`
export const ShowPAsswordContainer = styled.div`
display:flex;
align-items:center;
height:20px;
`
export const CheckBox=styled.input`
width:15px;
height:15px;
margin-right:10px;
cursor:pointer;
`
export const ShowpasswordText=styled.label`
font-size:14px;
font-style:bold;
font-weight:500;
font-family:"Roboto";
color:${props=>props.isDarkMode?"#ffffff":"#1e293b"};
cursor:pointer;
margin:0;
`

export const LoginButton = styled.button`
border:1px solid #3b82f6;
color:#3b82f6;
font-family:"Roboto";
width:95%;
height:25px;
margin-top:10px;
border-radius:4px;
cursor:pointer;
background-color:${props=>props.isDarkMode?"transparent":""};
`

export const ErrorMessage=styled.p`
    width:90%;
    border: 1px solid red;
    padding:10px;
    background-color: #ffefef;
    border-radius: 4px;
    color:red;
    font-family: "Roboto";
    margin:20px 0;
`