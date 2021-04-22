import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={s.myPosts}>
            <div className={s.item}>
                My Posts
            </div>
            <div>
                <textarea>Input message</textarea>
            </div>
            <div>
                <button>Post</button>
            </div>
            <Post message='hi, how are you?' likes='1'/>
            <Post message="it's my first post" likes='20'/>
        </div>
    )
}

export default MyPosts;