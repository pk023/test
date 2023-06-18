import style from "./SideBarItem.module.css"

export default function SideBarItem ({data,Isshow,handleClick}){

    const name = Isshow ? `${style.name} ${style.hide}` :`${style.name}`

    return (
        <li className={style.itemlayout} onClick={()=>handleClick(!Isshow)}>
        
        <div className={style.icon}>{data.SVG}</div>
        <span className={name}>{data.name}</span>
        </li>
    )
}