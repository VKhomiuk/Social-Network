import React from "react";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import InfoContainer from "./Info/infoContainer";


const Profile = () => {

    return (
        <div className={s.profile}>
            <InfoContainer />
            <MyPostsContainer />
        </div>

    )
}

export default Profile;
