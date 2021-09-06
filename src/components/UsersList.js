import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/userActions';
import UserCard from './UserCard';

const UsersList = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div className="users">
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    )
}

export default UsersList
