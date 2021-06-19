import React from "react";
import s from './Header.module.css';
import logo from './../Images/Vtalk.svg';
import logo2 from './../Images/Logo2.svg';
import Sun from '../Images/sun.svg'
import Moon from '../Images/moon.svg'
import {connect} from "react-redux";
import {followAC} from "../../Redux/users-reducer";
import {updateTheme} from "../../Redux/header-reducer";

let mapStateToProps = (state) => {
    return {
        darkTheme: state.headerState.darkTheme
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateTheme: () => {
            dispatch(updateTheme())
        },
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
                {props.darkTheme ? <img onClick={() => props.updateTheme()} src={Sun} alt=""/> : <img onClick={() => props.updateTheme()} src={Moon} alt=""/>}
            </div>
        </header>
    )
}
)

export default Header;