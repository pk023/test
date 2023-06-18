import StoryContainer from "./StoryContainer";
import PostContainer from "./PostContainer"
import RightBar from "./RightBar/RightBar"
import style from "../CSS/Main.module.css"

export default function Main (){

    return (

        <div className={style.layout}>
            <div className={style.main}>
                <StoryContainer/>
                <PostContainer/>
            </div>
            <RightBar/>
        </div>
    )
}