import Story from "./story/Story";
import StoryData from "../Data/StoryData"
import style from "../CSS/StoryContainer.module.css"

export default function StoryContainer(){

    const storyList = StoryData.map(()=>{
        return <Story/>
    })

    return (
        <div className={style.layout} >
            {storyList}
        </div>
    )
}