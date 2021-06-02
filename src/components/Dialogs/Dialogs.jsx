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

    console.log(props.dialogPage)

    let messageElements = props.dialogPage.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>)

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItems key={d.id} name={d.Name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.dialog_message}>
                <div>
                    {messageElements}
                </div>
                <div className={s.addMessage}>
                    <div>
                        <textarea onChange={onMessageChange}
                                  placeholder='Enter your message'
                                  ref={newMessageElement}
                                  value={props.dialogPage.newMessageText}/>
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