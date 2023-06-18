import style from "./photoContainer.module.css"
import photoData from "../../Data/photoData";
import { useState } from "react";

export default function PhotoConatiner() {
    
    const [photoindex,setindex] = useState(0)
    const photolength=photoData.length;
    const nextbtnshow = photolength -1 ==photoindex ? style.hide:""
    const prebtnshow = photoindex==0 ? style.hide:""

    const photoList = photoData.map((photo,index)=>{
        if (index < photoindex){
            return <img src={photo} className={`${style.photo} ${style.past}`}/>
        } else if (index == photoindex){
            return <img src={photo} className={`${style.photo} ${style.show}`}/>
        } else {
            return <img src={photo} className={`${style.photo} ${style.future}`}/>
        }
    })

    return (
        <ul className={style.photoContainer}>
            {photoList}
            <button className={`${style.photobtn} ${prebtnshow}`} onClick={()=>setindex(n=>n-1)}>pre </button>
            <button className={`${style.photobtn} ${style.next} ${nextbtnshow}`} onClick={()=>setindex(n=>n+1)}>next</button>
            </ul>
    )
}