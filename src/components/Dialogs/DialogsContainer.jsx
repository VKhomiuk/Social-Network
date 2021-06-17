import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        dialogs: state.dialogPage.dialogs,
        newMessageText: state.dialogPage.newMessageText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;