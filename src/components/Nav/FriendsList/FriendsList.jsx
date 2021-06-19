import React from "react";
import s from './FriendsList.module.css'
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {

    return (
        <div className={s.friends}>
            <div className={s.item}>
                <NavLink to={`/profile/${props.id}`} activeClassName={s.active}>
                    <div className={s.friend__img}>
                        <img src={props.img} alt=""/>
                    </div>
                    <div className={s.friend__name}>
                        {props.name}
                    </div>
                </NavLink>
            </div>
        </div>
)
}

export default FriendsList