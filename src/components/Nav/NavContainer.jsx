import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
        lang: state.headerState.lang
    };
};

const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;