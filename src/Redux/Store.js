import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }

}

export default store;