import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likes={p.likesCounter}/>);

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.myPosts}>
            <div>
                <textarea className={s.inputForm} onChange={onPostChange}
                          placeholder='Enter your message'
                          ref={newPostElement}
                          value={props.newPostText}/>
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
