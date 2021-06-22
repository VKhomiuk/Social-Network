let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'

let initialState = {
    users: [{
        id: 1,
        photoUrl: 'https://i.pinimg.com/originals/c9/ee/19/c9ee19d7395aa955fd03e6b12335d78b.jpg',
        followed: true,
        fName: 'Roma',
        status: 'status none',
        location: {country: 'Ukraine', city: 'Vinnytsia'}
    },
        {
            id: 2,
            photoUrl: 'https://it-tehnik.ru/wp-content/uploads/kak-posmotret-avatarku-v-diskorde-v-polnom-razmere_1.jpg',
            followed: false,
            fName: 'Vlad',
            status: 'status none',
            location: {country: 'Belarus', city: 'Minsk'}
        }]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users:
                    state.users.map(u => {
                        if (u.id === action.userId)
                            return {...u, followed: false}
                        return u
                    })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users:
                    state.users.map(u => {
                        if (u.id === action.userId)
                            return {...u, followed: true}
                        return u
                    })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer
