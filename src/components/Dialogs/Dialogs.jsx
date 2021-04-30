import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogsItems/DialogItems";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)

    }
    let onMessageChange = (e) => {
        let newText = e.target.value;
        let action = updateNewMessageTextActionCreator(newText)
        props.dispatch(action);
    }


    let messageElements = props.state.messages.map(m => <Messages message={m.message} id={m.id}/>)

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.Name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>
                    {messageElements}
                </div>
                <div className={s.addMessage}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                        {props.newMessageText}
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;