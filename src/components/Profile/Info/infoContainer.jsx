import React from "react";
import {connect} from "react-redux";
import Info from "./info";

let mapStateToProps = (state) => {
    return{
        info: state.profilePage.info
    }
}

const InfoContainer = connect(mapStateToProps)(Info);


export default InfoContainer;