import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./FriendsList/FriendsList";
import {ReactComponent as Png1} from "../Images/House.svg";
import {ReactComponent as Png2} from "./../Images/ChatCircleDots.svg";
import {ReactComponent as Png3} from "./../Images/CalendarBlank.svg";
import {ReactComponent as Png4} from "./../Images/MusicNotes.svg";
import {ReactComponent as Png5} from "./../Images/Settings.svg";
import {ReactComponent as Png6} from "./../Images/Users.svg"

const Nav = (props) => {

    let state = props.sideBar

    let friendList = state.friends.map(f => <Friends key={f.id} {...f} />)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/profile'>
                    <Png1/>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/dialogs'>
                    <Png2/>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/news'>
                    <Png3 />
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/music'>
                    <Png4 />
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/Users'>
                    <Png6 />
                    Users
                </NavLink>
            </div>
            <div className={s.friendsBar}>
                {friendList}
            </div>
            <div className={`${s.item} ${s.item_settings}`}>
                <NavLink className={s.nav__btn} activeClassName={s.active} to='/settings'>
                    <Png5/>
                    Settings
                </NavLink>
            </div>

        </nav>
    )
}

export default Nav;
