import { GET_USERS } from './../constants/actionTypes';

const initialState = {
    users: []
}

const userReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state, users: payload}
        default:
            return state
    }
}

export default userReducer