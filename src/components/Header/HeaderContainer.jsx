import {connect} from "react-redux";
import {updateLanguage, updateTheme} from "../../Redux/header-reducer";
import Header from "./Header";

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

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
