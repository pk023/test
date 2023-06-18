import style from "./SearchItem.module.css"


export default function SearchItem ({data}){

    const {name,pic,suggest} = data

    return (
        <li >
            <a className={style.layout}>
            <img src={pic} className={style.photo}/>
            <div>
                <p>{name}</p>
                <p>{suggest}</p>
            </div>
            <button className={style.btn}>X</button>
            </a>
        </li>
    )
}