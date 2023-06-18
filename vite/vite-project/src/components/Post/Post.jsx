import post from "./post.module.scss"
import abc from "../../assets/profile.jpg"
import PhotoConatiner from "../PhotoContainer/Photocontainer"
import { useState } from "react"

export default function Post (){

    const [Islike, setlike] = useState(false)

    const btnstyle = Islike ? `fa-solid fa-heart fa-2xl ${post.likebtn}` : "fa-regular fa-heart fa-2xl" 

    return (
            <article className={post.post}>
            <div className={post.postUser}>
            <img src={abc} className={post.profilePhoto}/>
                <div className={post.userandtime}>
                    <h6>name</h6>
                    <h6>time</h6>
                </div>
                <button className={post.morebtn}>...</button>
            </div>
            <div className={post.container}>
            <PhotoConatiner/>
            </div>
            <div className={post.functionButton}>
                <button onClick={()=>setlike(!Islike)}><i class={btnstyle}></i></button>
                <button><i class="fa-regular fa-comment fa-2xl"></i></button>
                <button><i class="fa-solid fa-paper-plane fa-2xl"></i></button>
                <button className={post.rightside}><i class="fa-solid fa-bookmark fa-2xl"></i></button>
            </div>
            <span>like</span>
            <div>
                <span>name</span>
                <p>text</p>
            </div>
            <form className={post.form}>
                <input placeholder="comment" className={post.textarea}/>
                <button>send</button>
            </form>
        </article>

    )
}