const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, Name: 'Vadim'},
        {id: 2, Name: 'Vlad'},
        {id: 3, Name: 'Dasha'},
        {id: 4, Name: 'Misha'},
        {id: 5, Name: 'Roma'},
    ],
    messages: [
        {id: 1, message: 'I`m fine thanks'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
})

export default dialogsReducer;
