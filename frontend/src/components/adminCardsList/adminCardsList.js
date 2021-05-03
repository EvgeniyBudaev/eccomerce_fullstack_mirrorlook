import React, {useEffect} from "react"
import {
    productsByCategorySelector,
    productsLoadedSelector,
    productsLoadingSelector
} from "../../redux/selectors"
import {withRouter} from "react-router"
import {connect, useDispatch, useSelector} from "react-redux"
import {fetchProductsByCategory} from "../../redux/actions/productsActions"
import {deleteProduct} from "../../redux/actions/deleteProductActions"
import {Link, useHistory} from "react-router-dom"
import Loader from "../loader"
import {PRODUCT_CREATE_RESET} from "../../constants/productConstants"
import {createProduct} from "../../redux/actions/productCreateActions"

const AdminCardsList = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {fetchProductsByCategory, createProduct, deleteProduct, loading, loaded, category_slug, products} = props
    // console.log('props', props)

    const productDelete = useSelector(state => state.productDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete
    } = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct
    } = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        dispatch({type: PRODUCT_CREATE_RESET})
        if (!userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/categories/${category_slug}/${createdProduct.product_slug}/edit`)
        } else {
            fetchProductsByCategory(category_slug)
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct])

    const deleteHandler = (category_slug, product_slug) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            deleteProduct(category_slug, product_slug)
        }
    }

    const createHandler = (category_slug) => {
        createProduct(category_slug)
    }

    if (loading ?? !loaded) return <Loader />

    return (
        <div>
            <div className="align-items-center">
                <div>
                    <h1>Товары по категории</h1>
                </div>
                <div className="text-right">
                    <button className="my-3" onClick={() => createHandler(category_slug)}>
                        <i>+</i> Добавить новый товар
                    </button>
                </div>
            </div>

            {loadingDelete && <Loader/>}
            {errorDelete && <p>{errorDelete}</p>}

            {loadingCreate && <Loader/>}
            {errorCreate && <p>{errorCreate}</p>}

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
                                    onClick={() => deleteHandler(entity.category_slug, entity.product_slug)}
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
    {fetchProductsByCategory, createProduct, deleteProduct}
)(AdminCardsList))