import {connect} from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return {
        darkTheme: state.headerState.darkTheme
    };
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
