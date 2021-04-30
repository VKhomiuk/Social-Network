import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import png1 from "./../Images/House.svg";
import png2 from "./../Images/ChatCircleDots.svg";
import png3 from "./../Images/CalendarBlank.svg";
import png4 from "./../Images/MusicNotes.svg";
import png5 from "./../Images/Settings.svg";
import png6 from "./../Images/Users.svg"

const Nav = (props) => {

    let friendList = props.friends.map(f => <Friends id={f.id} name={f.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/profile'>
                    <img src={png1} alt="png1" />
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <img src={png2} alt="png2" />
                <NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <img src={png3} alt="png3" />
                <NavLink activeClassName={s.active} to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <img src={png4} alt="png4" />
                <NavLink activeClassName={s.active} to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <img src={png6} alt="png6" />
                <NavLink activeClassName={s.active} to='/Friends'>Friends</NavLink>
            </div>
            <div className={s.friendsBar}>
                {friendList}
            </div>
            <div className={s.item}>
                <img src={png5} alt="png5" />
                <NavLink activeClassName={s.active} to='/settings'>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Nav;