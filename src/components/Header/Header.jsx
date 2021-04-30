import React from "react";
import s from './Header.module.css';
import logo from './../Images/Vtalk.svg';
import logo2 from './../Images/Logo2.svg';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.logo2} src={logo2} alt="Logo" />
            <img className={s.logo} src={logo} alt="Logo" />
        </header>
    )
}

export default Header;