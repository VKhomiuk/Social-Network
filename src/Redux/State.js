const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, message: 'hi, how are you?', likesCounter: 1},
                    {id: 2, message: 'it\'s my first post', likesCounter: 20},
                ],
                newPostText: '',
            },
        dialogPage:
            {
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
            },
        sideBar: {
            friends: [{id: 1, name: 'Roma'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Dasha'},
            ]
        },
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogPage.newMessageText,
            };
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber();
        }
        if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber();
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

export const addPostActionCreator = () => ({
        type: ADD_POST
})

export const updateNewPostTExtActionCreator = (newText) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
})

export default store;