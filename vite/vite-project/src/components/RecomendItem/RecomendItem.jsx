import style from "./RecomendItem.module.css"

export default function RecomendItem ({data}){
    return  (
        <li className={style.recomendItem}>
            <img src={data.pic} className={style.profilephoto}/>
            <div>
                <h4>{data.name}</h4>
                <h6>{data.suggest}</h6>
            </div>
            <button className={style.rightside}>follow</button>
        </li>
    )
}