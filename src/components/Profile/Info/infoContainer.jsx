import React from "react";
import {connect} from "react-redux";
import Info from "./info";

let mapStateToProps = (state) => {
    return{
        lang: state.headerState.lang,
        profilePage: state.profilePage,
    }
}

const InfoContainer = connect(mapStateToProps)(Info);


export default InfoContainer;
