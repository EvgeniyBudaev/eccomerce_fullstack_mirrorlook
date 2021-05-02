import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from "react-router-dom"
import Loader from "../loader"
import {fetchCategories} from "../../redux/actions/categoriesActions"
import {createStructuredSelector} from "reselect"
import {
    categoriesErrorSelector,
    categoriesListSelector,
    categoriesLoadedSelector,
    categoriesLoadingSelector
} from "../../redux/selectors"

const AdminCategories = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {loading, loaded, error, categories} = props

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(fetchCategories())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {

        }
    }

    const createHandler = (item) => {
    }

    return (
        <div>
            <div className="align-items-center">
                <div>
                    <h1>Категории</h1>
                </div>
                <div className="text-right">
                    <button className="my-3" onClick={createHandler}>
                        <i>+</i> Create category
                    </button>
                </div>
            </div>

            {loading ?? !loaded
                ? <Loader/>
                : error
                    ? <p>{error}</p>
                    : (
                        <table className="table-sm">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>IMAGE</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {categories.map(entity => (
                                <tr key={entity.id}>
                                    <td>{entity.id}</td>
                                    <td>
                                        <Link to={`/admin/categories/${entity.category_slug}/`} key={entity.id}>
                                            {entity.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/categories/${entity.category_slug}/`} key={entity.id}>
                                            <img src={entity.image} alt=""/>
                                        </Link>
                                    </td>

                                    <td>
                                        <Link
                                            to={`/admin/categories/${entity.category_slug}/edit`}>
                                            <button className="btn-sm">
                                                <i className="fas fa-edit">Edit</i>
                                            </button>
                                        </Link>

                                        <button className="btn-sm"
                                                onClick={() => deleteHandler(entity.id)}
                                        >
                                            <i>Delete</i>
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

export default connect(
    createStructuredSelector({
        categories: categoriesListSelector,
        loading: categoriesLoadingSelector,
        loaded: categoriesLoadedSelector,
        error: categoriesErrorSelector
    })
)(AdminCategories)