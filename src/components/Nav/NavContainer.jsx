import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
    };
};

const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;