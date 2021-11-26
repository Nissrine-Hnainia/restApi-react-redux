
import { GET_USERS } from './../actions/usersTypes';

const initialState= {
    users: []
}

export const usersReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state, users: payload}
    
        default:
            return state
    }
}