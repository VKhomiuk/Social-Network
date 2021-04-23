import React from "react";
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let path = '/profile/' + props.id

    return (
        <div className={s.friends}>
            <div className={s.item}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
)
}

export default Friends