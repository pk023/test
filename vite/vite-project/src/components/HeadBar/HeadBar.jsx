import data from "../../Data/sideBarData"
import style from "./headBar.module.css"
function HeadBar (){

    const notification = data.filter(item => item.name=="notification")
    const list = notification.map(item=>item.SVG)
    // 點解唔可以放係return??
    return(
        <header className={style.layout}>
            <div className={style.iconlogo}>
                Instagram
            </div>
            <div className={style.searchBar}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="搜尋" className={style.search}/>
            </div>
            <div className={style.notification}>{list}</div>
        </header>
    )
}

export default HeadBar