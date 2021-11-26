import axios from "axios"
import { FAIL_USERS, GET_USERS } from './usersTypes';


export const getUsers = () => async(dispatch) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: GET_USERS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FAIL_USERS,
            payload: error
        })
    }
}