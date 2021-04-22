import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogsItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItems name='Vadim' id='1'/>
            <DialogItems name='Vlad' id='2'/>
            <DialogItems name='Dasha' id='3'/>
            <DialogItems name='Misha' id='4'/>
            <Messages/>
        </div>
    )
}

export default Dialogs;