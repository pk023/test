import SideBar from "./components/SideBar/SideBar"
import RightBar from "./components/RightBar/RightBar"
import Story from "./components/story/Story"
import PostContainer from "./components/PostContainer"
import "./index.css"
import abc from "../src/assets/profile.jpg"
import StoryContainer from "./components/StoryContainer"
import Main from "./components/Main"
import HeadBar from "./components/HeadBar/HeadBar"
import TempContainer from "./components/TempContainer/TempContainer"



export default function App(){
  return (
    <div className="layout">
    <HeadBar/>
    <SideBar/>
    {/* <TempContainer/> */}
    <Main/>
    </div>
    
    // <div className="test">
    //  <div className="main">
    //   <Story/>
    //   <Post/>
    //   </div>
    // <RightBar/>
    // </div>
    // </div>
    
  )
  }