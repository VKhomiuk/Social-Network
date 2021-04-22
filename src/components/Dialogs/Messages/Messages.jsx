import React from 'react';
import s from './Messages.module.css';

const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.message}>
                Thank you)
            </div>
            <div className={s.message}>
                I`m fine
            </div>
            <div className={s.message}>
                Hi, how are you?
            </div>
        </div>
    )
}

export default Messages;