import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    let onPostChange = (newText) => {
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action);
    }

    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={props.posts}
    />)
}

export default MyPostsContainer;
