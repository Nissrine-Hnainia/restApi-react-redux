import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { getUsers } from './../redux/actions/usersActions';

const UsersList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const users = useSelector(state => state.users)
    return (
        <div className="users">
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    )
}

export default UsersList
