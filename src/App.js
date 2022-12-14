
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Home from "./components/Home/Home"
import Gaming from "./components/Gaming/Gaming"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"

import Trending from "./components/Trending/Trending";
import useAuthContext from "./hooks/useAuthContext";
import SavedVideos from "./components/SavedVideos/SavedVideos";


function App() {

  
  const user1 = useAuthContext()
  

  const user = localStorage.getItem('user')
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={user1.user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!user1.user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user1.user ? <Login /> : <Navigate to="/" />} />
        <Route path="/trending" element={user ? <Trending /> : <Navigate to="/login" />} />
        <Route path="/gaming" element={user?<Gaming />:<Navigate to="/login"/>} />
        <Route path="/videoplayer/:id" element={user?<VideoPlayer />:<Navigate to="/login"/>} />
        <Route path="/savedvideos" element={user?<SavedVideos />:<Navigate to="/login"/>} />
      </Routes>
    </div>
  );
}

export default App;
