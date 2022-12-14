import {BallTriangle} from "react-loader-spinner"
import { LoaderContainer } from "./styledComponent"
import useThemeContext from "../../hooks/useThemeContext" 
function LoaderSpinner(){
    const context = useThemeContext()
    const {isDarkMode} = context

    return <LoaderContainer>
    <BallTriangle color={isDarkMode?"#ffffff":"cyan"} height="50" width="50" />
  </LoaderContainer>
}

export default LoaderSpinner