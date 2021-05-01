import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useRouteMatch, Link} from "react-router-dom"
import {getUserDetails} from "../../redux/actions/userDetails"
import Loader from "../loader"
import {updateUser} from "../../redux/actions/userUpdateActions"
import {USER_UPDATE_RESET} from "../../constants/userConstants";

const UserEdit = () => {
    const match = useRouteMatch()
    const history = useHistory()

    const userId = match.params.id
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const {
        error: errorUpdate,
        loading: loadingUpdate,
        success: successUpdate
    } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({type: USER_UPDATE_RESET})
            history.push('/admin/userlist')
        } else {
            if (!user.name ?? user._id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }

    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id: user.id, name, email, isAdmin}))
    }

    return (
        <div>
            <Link to='/admin/userlist'>
                Go Back
            </Link>
            <div className="FormContainer">
                <h1>User Edit</h1>

                {loadingUpdate && <Loader/>}
                {errorUpdate &&
                <p>{errorUpdate}</p>}

                {loading ? <Loader/> : error ?
                    <p>{error}</p> : (
                        <form onSubmit={submitHandler}>
                            <div className="FormGroup">
                                <div className="FormLabel">Name</div>
                                <input
                                    type='name'
                                    placeholder='Enter Name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="FormGroup">
                                <div className="FormLabel">Email Address</div>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="FormGroup">
                                <label htmlFor="userEdit-IsAdmin">Is Admin</label>
                                <input
                                    id="userEdit-IsAdmin"
                                    type='checkbox'
                                    checked={isAdmin}
                                    onChange={e => setIsAdmin(e.target.checked)}
                                >
                                </input>
                            </div>

                            <button type='submit'>Update</button>

                        </form>
                    )}
            </div>
        </div>
    )
}

export default UserEdit