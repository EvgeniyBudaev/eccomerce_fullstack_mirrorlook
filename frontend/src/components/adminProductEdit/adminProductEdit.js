import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useRouteMatch, Link, withRouter} from "react-router-dom"
import Loader from "../loader"
import {fetchProductDetail} from "../../redux/actions/productActions"
import {ROUTES} from "../../routes"
import {PRODUCT_UPDATE_RESET} from "../../constants/productConstants"
import {updateProduct} from "../../redux/actions/productUpdateActions"
import "./adminProductEdit.scss"

const AdminProductEdit = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const dispatch = useDispatch()

    const productSlug = match.params.product_slug
    const categorySlug = match.params.category_slug

    const [name, setName] = useState('')
    const [product_slug, setProductSlug] = useState('')
    const [image, setImage] = useState('')
    const [product_photo1, setProductPhoto1] = useState('')
    const [product_photo2, setProductPhoto2] = useState('')
    const [product_photo3, setProductPhoto3] = useState('')
    const [product_photo4, setProductPhoto4] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)
    const [num_reviews, setNumReviews] = useState(0)
    const [price, setPrice] = useState(0)
    const [count_in_stock, setCountInStock] = useState(0)
    const [code, setCode] = useState('')
    const [color_frame, setColorFrame] = useState('')
    const [color_mirror, setColorMirror] = useState('')
    const [base_mirror, setBaseMirror] = useState('')
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [weight, setWeight] = useState(0)
    const [type_of_installation, setTypeOfInstallation] = useState('')
    const [type_of_mounting, setTypeOfMounting] = useState('')
    const [heightWithoutFrame, setHeightWithoutFrame] = useState(0)
    const [weightWithoutFrame, setWeightWithoutFrame] = useState(0)
    const [faced, setFaced] = useState(true)
    const [form, setForm] = useState('')
    const [appointment, setAppointment] = useState('')
    const [material_mirror, setMaterialMirror] = useState('')
    const [material_frame, setMaterialFrame] = useState('')
    const [country_brand, setCountryBrand] = useState('')
    const [country_manufacturer, setCountryManufacturer] = useState('')
    const [manufacturer, setManufacturer] = useState('')


    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {
        error: errorUpdate,
        loading: loadingUpdate,
        success: successUpdate
    } = productUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({type: PRODUCT_UPDATE_RESET})
            history.push(`/admin${ROUTES.CATEGORIES}${categorySlug}/`)
        } else {
            if (!product.name ?? product.product_slug !== productSlug) {
                dispatch(fetchProductDetail(categorySlug, productSlug))
            } else {
                setName(product.name)
                setProductSlug(product.product_slug)
                setImage(product.image)
                setProductPhoto1(product.product_photo1)
                setProductPhoto2(product.product_photo2)
                setProductPhoto3(product.product_photo3)
                setProductPhoto4(product.product_photo4)
                setDescription(product.description)
                setRating(product.rating)
                setNumReviews(product.num_reviews)
                setPrice(product.price)
                setCountInStock(product.count_in_stock)
                setCode(product.code)
                setColorFrame(product.color_frame)
                setColorMirror(product.color_mirror)
                setBaseMirror(product.base_mirror)
                setHeight(product.height)
                setWidth(product.width)
                setWeight(product.weight)
                setTypeOfInstallation(product.type_of_installation)
                setTypeOfMounting(product.type_of_mounting)
                setHeightWithoutFrame(product.heightWithoutFrame)
                setWeightWithoutFrame(product.weightWithoutFrame)
                setFaced(product.faced)
                setForm(product.form)
                setAppointment(product.appointment)
                setMaterialMirror(product.material_mirror)
                setMaterialFrame(product.material_frame)
                setCountryBrand(product.country_brand)
                setCountryManufacturer(product.country_manufacturer)
                setManufacturer(product.manufacturer)
            }
        }

    }, [dispatch, product, productSlug, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct(categorySlug,{
            product_slug: productSlug,
            name,
            image,
            product_photo1,
            product_photo2,
            product_photo3,
            product_photo4,
            description,
            rating,
            num_reviews,
            price,
            count_in_stock,
            code,
            color_frame,
            color_mirror,
            base_mirror,
            height,
            width,
            weight,
            type_of_installation,
            type_of_mounting,
            heightWithoutFrame,
            weightWithoutFrame,
            faced,
            form,
            appointment,
            material_mirror,
            material_frame,
            country_brand,
            country_manufacturer,
            manufacturer,
        }))
    }

    return (
        <div>
            <Link to={"/admin" + ROUTES.CATEGORIES + categorySlug + "/"}>
                Go Back
            </Link>
            <div className="FormContainer">
                <h1>Edit product</h1>

                {loadingUpdate && <Loader/>}
                {errorUpdate &&
                <p>{errorUpdate}</p>}

                {loading ? <Loader/> : error ?
                    <p>{error}</p> : (
                        <form onSubmit={submitHandler}>
                            <div className="Form-Group-Wrapper">
                                <div className="Form-Group">
                                    <label>Название товара</label>
                                    <input
                                        className="Form-Control"
                                        type='name'
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Уникальный URL товара</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Введите уникальный URL товара'
                                        value={product_slug}
                                        onChange={e => setProductSlug(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Главное фото товара</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Главное фото товара'
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Фото товара 1</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Главное фото товара'
                                        value={product_photo1}
                                        onChange={e => setProductPhoto1(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Фото товара 2</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Фото товара'
                                        value={product_photo2}
                                        onChange={e => setProductPhoto2(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Фото товара 3</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Фото товара'
                                        value={product_photo3}
                                        onChange={e => setProductPhoto3(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Фото товара 4</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Фото товара'
                                        value={product_photo4}
                                        onChange={e => setProductPhoto4(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Описание товара</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Описание товара'
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Рейтинг товара</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Рейтинг товара'
                                        value={rating}
                                        onChange={e => setRating(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Отзывы</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Отзывы'
                                        value={num_reviews}
                                        onChange={e => setNumReviews(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Цена</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Укажите цену товара'
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Количество</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Введите кол-во товара в наличии'
                                        value={count_in_stock}
                                        onChange={e => setCountInStock(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Артикул</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Артикул'
                                        value={code}
                                        onChange={e => setCode(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Цвет рамы</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Цвет рамы'
                                        value={color_frame}
                                        onChange={e => setColorFrame(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Цвет зеркала</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Цвет зеркала'
                                        value={color_mirror}
                                        onChange={e => setColorMirror(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Цвет основы</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Цвет основы'
                                        value={base_mirror}
                                        onChange={e => setBaseMirror(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Высота</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Высота'
                                        value={height}
                                        onChange={e => setHeight(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Ширина</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Ширина'
                                        value={width}
                                        onChange={e => setWidth(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Вес</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Вес'
                                        value={weight}
                                        onChange={e => setWeight(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Тип установки</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Тип установки'
                                        value={type_of_installation}
                                        onChange={e => setTypeOfInstallation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Тип навески</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Тип навески'
                                        value={type_of_mounting}
                                        onChange={e => setTypeOfMounting(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Высота без рамы</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Высота без рамы'
                                        value={heightWithoutFrame}
                                        onChange={e => setHeightWithoutFrame(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Ширина без рамы</label>
                                    <input
                                        className="Form-Control"
                                        type='number'
                                        placeholder='Ширина без рамы'
                                        value={weightWithoutFrame}
                                        onChange={e => setWeightWithoutFrame(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Наличие фацета</label>
                                    <input
                                        className="Form-Control"
                                        type='checkbox'
                                        placeholder='Наличие фацета'
                                        value={faced}
                                        onChange={e => setFaced(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Форма</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Форма'
                                        value={form}
                                        onChange={e => setForm(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Назначение</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Назначение'
                                        value={appointment}
                                        onChange={e => setAppointment(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Материал зеркала</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Материал зеркала'
                                        value={material_mirror}
                                        onChange={e => setMaterialMirror(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Материал рамы</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Материал рамы'
                                        value={material_frame}
                                        onChange={e => setMaterialFrame(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Страна бренда</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Страна бренда'
                                        value={country_brand}
                                        onChange={e => setCountryBrand(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Страна производства</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Страна производства'
                                        value={country_manufacturer}
                                        onChange={e => setCountryManufacturer(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="Form-Group">
                                    <label>Производитель</label>
                                    <input
                                        className="Form-Control"
                                        type='text'
                                        placeholder='Производитель'
                                        value={manufacturer}
                                        onChange={e => setManufacturer(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <button type='submit'>Update</button>

                        </form>
                    )}
            </div>
        </div>
    )
}

export default withRouter(AdminProductEdit)