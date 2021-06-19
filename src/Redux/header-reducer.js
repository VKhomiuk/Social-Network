const UPDATE_THEME = 'UPDATE_THEME';

let initialState = {
    darkTheme: true,
    lang: 'eng'
}

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_THEME: {
            return{
                ...state, darkTheme: !state.darkTheme
            }
        }
        case UPDATE_THEME: {
            return{
                ...state, lang: !state.darkTheme
            }
        }
        default: {
            return state;
        }
    }

}

export const updateTheme = () => ({
    type: UPDATE_THEME
})

export default headerReducer;
