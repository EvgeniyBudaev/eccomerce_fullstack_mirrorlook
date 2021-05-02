import React, {useEffect} from "react"
import {
    productsByCategorySelector,
    productsLoadedSelector,
    productsLoadingSelector
} from "../../redux/selectors"
import {withRouter} from "react-router"
import {connect, useDispatch, useSelector} from "react-redux"
import {fetchProductsByCategory} from "../../redux/actions/productsActions"
import {Link, useHistory} from "react-router-dom"
import Loader from "../loader"

const AdminCardsList = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {fetchProductsByCategory, loading, loaded, category_slug, products} = props
    console.log('props', props)

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            fetchProductsByCategory(category_slug)
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

    if (loading ?? !loaded) return <Loader />

    return (
        <div>
            <div className="align-items-center">
                <div>
                    <h1>Товары по категории</h1>
                </div>
                <div className="text-right">
                    <button className="my-3" onClick={createHandler}>
                        <i>+</i> Добавить новый товар
                    </button>
                </div>
            </div>


            <table className="table-sm">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IMAGE</th>
                    <th>PRICE</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map(entity => (
                    <tr key={entity.id}>
                        <td>{entity.id}</td>
                        <td>{entity.name}</td>
                        <td><img src={entity.image} alt=""/></td>
                        <td>{entity.price}</td>

                        <td>
                            <Link
                                to={`/admin/categories/${entity.category_slug}/${entity.product_slug}/edit`} key={entity.id}>
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

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: productsLoadingSelector(state, ownProps),
        loaded: productsLoadedSelector(state, ownProps),
        products: productsByCategorySelector(state, ownProps),
    }
}

export default withRouter(connect(
    mapStateToProps,
    {fetchProductsByCategory}
)(AdminCardsList))