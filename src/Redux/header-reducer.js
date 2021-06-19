const UPDATE_THEME = 'UPDATE_THEME';
const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

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
        case UPDATE_LANGUAGE: {
            return{
                ...state, lang: state.lang === 'eng' ? 'rus' : 'eng'
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

export const updateLanguage = () => ({
    type: UPDATE_LANGUAGE
})

export default headerReducer;
