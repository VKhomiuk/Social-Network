import React from "react";
import s from './Header.module.css';
import logo from './../Images/Vtalk.svg';
import logo2 from './../Images/Logo2.svg';
import Sun from '../Images/sun.svg'
import Moon from '../Images/moon.svg'
import {connect} from "react-redux";
import {followAC} from "../../Redux/users-reducer";
import {updateLanguage, updateTheme} from "../../Redux/header-reducer";

let mapStateToProps = (state) => {
    return {
        darkTheme: state.headerState.darkTheme,
        lang: state.headerState.lang
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateTheme: () => {
            dispatch(updateTheme())
        },
        updateLanguage: () => {
            dispatch(updateLanguage())
        }
    };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(props => {
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
)

export default Header;