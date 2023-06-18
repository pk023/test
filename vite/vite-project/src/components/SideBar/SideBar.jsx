import sideBarData from "../../Data/sideBarData";
import SideBarItem from "../SideBarItem/SideBarItem.jsx"
import style from "./Sidebar.module.css"
import TempContainer from "../TempContainer/TempContainer";
import { useState } from "react";

export default function sidebar(){

    const [Isshow,setshow] = useState(false)

    const listitems = sideBarData.map(data=>{
        return <SideBarItem data={data} Isshow={Isshow} handleClick={setshow}/>
    })

    const layout = Isshow? `${style.layout} ${style.hide}` : style.layout

    return (
        <div className={style.ref}>
        <aside className={layout}>
            
                <div className={style.iconlayout}>
                <a className={style.logo}>instagram</a>
                <div className={style.icon}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg></div></div>
            <ul className={style.listlayout}>
                {listitems}
            </ul>
            <div className={style.morebtn}><button><i class="fa-solid fa-bars fa-2xl"></i><span className={style.moretext}>更多</span></button></div>
        </aside>
        <TempContainer Isshow={Isshow}/>
        </div>
    )
}