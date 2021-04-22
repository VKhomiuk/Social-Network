import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogsItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let messageElements = props.messages.map(m => <Messages message={m.message} id={m.id}/>)

    let dialogsElements = props.dialogs.map(d => <DialogItems name={d.Name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;