import Post from "./Post/Post"
import layout from "../CSS/postContainer.module.css"
import { useState,useEffect } from "react"

function PostContainer(){

    const [index,setindex] = useState(0)

    const [post,setPost] = useState([])

    useEffect (()=>{
        setPost([...post,index])
    },[index])

    
    const postList = post.map(()=>{
        return <Post/>
    })

    return (
        <section className={layout.postContainer}>
            {postList}
        </section>
    )
}

export default PostContainer