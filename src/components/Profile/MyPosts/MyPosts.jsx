import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {




    let newPostElement = React.createRef();

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCounter}/>);

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPosts}>
            <div className={s.item}>
                My Posts
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Post</button>
            </div>
            <div>
                {postsElements.reverse()}
            </div>
        </div>
    )
}

export default MyPosts;