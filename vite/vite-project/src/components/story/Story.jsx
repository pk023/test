import abc from "../../assets/profile.jpg"
import style from "./Story.module.css"

export default function Story (){
    return (
        <div className={style.story}>
            <img className={style.photo} src={abc}/>
            <p className={style.textcenter}>name</p>
        </div>
    )
}