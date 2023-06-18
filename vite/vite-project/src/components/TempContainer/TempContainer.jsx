import { useState } from "react";
import searchData from "../../Data/recomendData"
import SearchItem from "../SearchItem/SearchItem";
import style from "./TempContainer.module.css"

export default function TempContainer ({Isshow}){

    const list = searchData.map(data=>{
        return <SearchItem data={data}/>
    })

    const layout = Isshow ? `${style.layout} ${ style.show}` :`${style.layout}`

    return (
        <div className={layout}>
            <p>Search</p>
            <input />
            <div>
                <div className={style.content}>
                    <span>最近</span>
                    <button>全部清除</button>
                </div>
                <ul className={style.list}>
                    {list}
                </ul>
            </div>
        </div>
    )
}