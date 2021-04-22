import React from "react";
import s from './Profile.module.css';
import Info from "./Info/info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={s.profile}>
              <Info />
              <MyPosts />
        </div>

    )
}

export default Profile;