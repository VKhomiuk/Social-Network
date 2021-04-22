import React from "react";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img alt='#' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dyson_logo.svg/1280px-Dyson_logo.svg.png'/>
        </header>
    )
}

export default Header;