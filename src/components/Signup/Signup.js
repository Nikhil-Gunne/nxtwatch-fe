import {useState} from "react"
import useSignup from "../../hooks/useSignup"
import { AppLogo, CheckBox, ErrorMessage, InputElement, LabelElement, LoginButton, LoginForm, LoginFormContainer, LogoAndFormContainer, ShowPAsswordContainer, ShowpasswordText } from "./styledComponents"
import useThemeContext from "../../hooks/useThemeContext"

function Signup() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [showPassword,setShowPassword] = useState(false)

    const handleEmail = event => setEmail(event.target.value)

    const handlePassword = event => setPassword(event.target.value)

    const {signup,error,isLoading} = useSignup()

    const {errorMsg,emptyFields=[]} = error

    const {isDarkMode} = useThemeContext()

    const handleShowPassword = () =>{
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        await signup(email,password)

    }

    return <LoginFormContainer isDarkMode={isDarkMode}>
        <LogoAndFormContainer isDarkMode={isDarkMode}>
            <AppLogo src={isDarkMode?"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"} alt="logo" />
            <LoginForm onSubmit={handleSubmit}>
                <LabelElement htmlFor="email" isDarkMode={isDarkMode}>EMAIL</LabelElement>
                <InputElement type="text" placeholder="Enter email" onChange={handleEmail} id="email" value={email} emptyField={emptyFields.includes("email")}/>
                <LabelElement htmlFor="password" isDarkMode={isDarkMode}>PASSWORD</LabelElement>
                <InputElement type={showPassword?"text":"password"} placeholder="Enter password" onChange={handlePassword} id="password" value={password} emptyField={emptyFields.includes("password")}/>
                <ShowPAsswordContainer>
                    <CheckBox type="checkbox" id="checkbox" onChange={handleShowPassword}/>
                    <ShowpasswordText htmlFor="checkbox" isDarkMode={isDarkMode}>show password</ShowpasswordText>
                </ShowPAsswordContainer>
                <LoginButton isDarkMode={isDarkMode} type="submit" disabled={isLoading}>Signup</LoginButton>
                {errorMsg&&<ErrorMessage>{errorMsg}</ErrorMessage>}
            </LoginForm>

        </LogoAndFormContainer>

    </LoginFormContainer>
}

export default Signup