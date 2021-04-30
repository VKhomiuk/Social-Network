import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTExtActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCounter}/>);

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    let onPostChange = (e) => {
        let newText = e.target.value;
        let action = updateNewPostTExtActionCreator(newText)
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <div className={s.item}>
                My Posts
            </div>
            <div>
                <textarea onChange={onPostChange}
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