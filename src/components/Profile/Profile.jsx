import React from "react";
import s from './Profile.module.css';
import Info from "./Info/info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <Info/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>

    )
}

export default Profile;