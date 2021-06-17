import React from "react";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Info from "./Info/info";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <Info
                store={props.store}
            />
            <MyPostsContainer
                store={props.store}
            />
        </div>

    )
}

export default Profile;
