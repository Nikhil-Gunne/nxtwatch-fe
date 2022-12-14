import {createContext,useReducer} from "react"

export const SavedVideosContext = createContext()

const videoReducer = (state,action) =>{
    switch(action.type){
        case "ADD_VIDEO":
            return {videos:[action.payload,...state.videos]}
        
        case "ADD_VIDEOS":
                return {videos:[...action.payload]}
        case "REMOVE_VIDEO":{
            // console.log(state.videos)
            // console.log(action.payload)
            const filteredData = state.videos.filter(video=>video.id!==action.payload)
            // console.log(filteredData,2)
            return {videos:[...filteredData]}
        }
        default:
            return state
    }

}

export function SavedVideosContextProvider ({children}){
    const [state,dispatch] = useReducer(videoReducer,{videos:[]})
    // console.log(state,"sv")

    

    return <SavedVideosContext.Provider value={{...state,dispatch}}>
        {children}
    </SavedVideosContext.Provider>
}

