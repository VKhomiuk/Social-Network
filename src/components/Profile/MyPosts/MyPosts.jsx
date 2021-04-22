import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCounter}/>)

    return (
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
            {postsElements}
        </div>
    )
}

export default MyPosts;