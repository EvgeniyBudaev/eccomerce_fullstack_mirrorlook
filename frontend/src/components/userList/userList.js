import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useHistory, Link} from "react-router-dom"

import {listUsers} from "../../redux/actions/userListActions"
import {ROUTES} from "../../routes"
import Loader from "../loader"

const UserList = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
                    dispatch(listUsers())
        } else {
             history.push(ROUTES.LOGIN)
        }
    }, [dispatch, history])

    const deleteHandler = (id) => {

    }

    return (
        <div>
            <h1>Users</h1>
            {loading
            ? <Loader />
            : error
                    ? <p variant="danger">{error}</p>
                    : (
                        <table className="table-sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ADMIN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? (
                                        <i>Да</i>
                                    ) : (
                                        <i>Нет</i>
                                    )}</td>
                                    <td>
                                        <Link to={`/admin/user/${user._id}`}>
                                            <button className="btn-sm">
                                                <i className="fas fa-edit">Edit</i>
                                            </button>
                                        </Link>

                                        <button
                                                className="btn-sm"
                                                 onClick={() => deleteHandler(user._id)}
                                        >
                                            <i className="fas fa-trash">Trash</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
        </div>
    )
}

export default UserList