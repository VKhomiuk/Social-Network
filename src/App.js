import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        darkTheme: state.headerState.darkTheme
    };
};


const App = connect(mapStateToProps)(props => {
    return (
        <div className={`app-wrapper ${props.darkTheme ? 'darkApp' : 'lightApp'}`} >
            <Header />
            <NavContainer />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
});

export default App;