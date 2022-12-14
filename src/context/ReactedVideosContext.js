import { createContext, useReducer } from "react"

export const ReactedVideosContext = createContext()

const videoReducer = (state,action) =>{
    switch(action.type){
        case "ADD_VIDEO":{
            // console.log(action.payload,"pay1")
            return {reactedVideos:[action.payload,...state.reactedVideos]}
        }
        case "ADD_VIDEOS":
            // console.log(action.payload)
            if(action.payload.length>0){
                console.log("lopalki")
                return {reactedVideos:[...action.payload,...state.reactedVideos]}
            }
            return state
            
        case "UPDATE_VIDEO":{
            // console.log(action.payload,"pay")
            // console.log(state.reactedVideos)
            const filtered = state.reactedVideos.filter(vid=>vid.video_id !== action.payload.video_id)
            return {reactedVideos:[...filtered,action.payload]}
            
        }
        case "REMOVE_VIDEOS":
            return {reactedVideos:[]}

        default:
            return state
    }
}

const ReactedVideosContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(videoReducer,{reactedVideos:[]})
    // console.log(state,"rv")
    return <ReactedVideosContext.Provider value={{...state,dispatch}}>
        {children}
    </ReactedVideosContext.Provider>
}

export default ReactedVideosContextProvider