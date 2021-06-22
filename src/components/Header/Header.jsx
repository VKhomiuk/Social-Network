import React from "react";
import s from './Header.module.css';
import logo from './../Images/Vtalk.svg';
import logo2 from './../Images/Logo2.svg';
import Sun from '../Images/sun.svg'
import Moon from '../Images/moon.svg'


const Header = (props) => {
        return(
            <header className={s.header}>
                <div style={{display: 'flex'}}>
                    <img className={s.logo2} src={logo2} alt="Logo" />
                    <img className={s.logo} src={logo} alt="Logo" />
                </div>
                <div className={s.theme}>
                    <button onClick={props.updateLanguage}>{props.lang === 'eng' ? 'rus' : 'eng' }</button>
                    <span>{props.darkTheme ? <img onClick={() => props.updateTheme()} src={Sun} alt=""/> : <img onClick={() => props.updateTheme()} src={Moon} alt=""/>}</span>
                </div>
            </header>
        )
}

export default Header;
