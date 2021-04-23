import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogsItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()

    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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