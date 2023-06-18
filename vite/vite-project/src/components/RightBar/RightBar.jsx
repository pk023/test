import recomendData from "../../Data/recomendData"
import RecomendItem from "../RecomendItem/RecomendItem"
import abc from "../../assets/profile.jpg"
import style from "./RightBar.module.css"

export default function RightBar (){

    const RecomendList = recomendData.map(data=>{
        return <RecomendItem data={data}/>
    })

    return(
        <aside className={style.rightBar}>
            <div className={style.profile}>
                <img src={abc} className={style.profilephoto}/>
                <h6 >Indigo_5_alpha</h6>
                <button className={style.rightside}>Switch</button>
            </div>
            <div className={style.recomend}>
            <h5>Recomend</h5>
            <button>all</button>
            </div>
            <ul className={style.recomendlayout}>
                {RecomendList}
            </ul>
        </aside>
    )
}