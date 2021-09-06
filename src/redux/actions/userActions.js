import axios from "axios"
import { FAIL, GET_USERS } from './../constants/actionTypes';


export const getUsers = () => async(dispatch) => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error
        })
    }
}