const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    info: [
        {id: 1, fName: 'Vadym Khomiuk', birth: '25.09.2002', job: 'none'}
    ],
    posts: [
        {id: 1, message: 'hi, how are you?', likesCounter: 1},
        {id: 2, message: 'it\'s my first post', likesCounter: 20},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounter: 9999999
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }

}

export const addPostActionCreator = () => ({
        type: ADD_POST
})

export const updateNewPostTextActionCreator = (newText) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
})

export default profileReducer;
