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
        let newText = newMessageElement.current.value;
        props.updateNewMessageText(newText)

    }


    let messageElements = props.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>)
    let dialogsElements = props.dialogs.map(d => <DialogItems key={d.id} name={d.Name} id={d.id}/>)


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
                                  placeholder={props.lang === 'eng' ? 'Enter your message' : 'Введите сообщение' }
                                  ref={newMessageElement}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>{props.lang === 'eng' ? 'Send message' : 'Отправить сообщение' }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;