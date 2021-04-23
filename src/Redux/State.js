import {reRenderEntireTree} from "../render";

let state = {
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
            ],
            messages: [
                {id: 1, message: 'I`m fine thanks'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How are you'},
            ],
            newMessageText: 'fd',
        },
    sideBar: {
        friends: [{id: 1, name: 'Misha'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Dasha'},
        ]
    }

};

window.state = state;
export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogPage.newMessageText,
    };
    state.dialogPage.messages.push(newMessage);
    state.dialogPage.newMessageText = '';
    reRenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogPage.newMessageText = newText;
    reRenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounter: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    reRenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state);
}

export default state;