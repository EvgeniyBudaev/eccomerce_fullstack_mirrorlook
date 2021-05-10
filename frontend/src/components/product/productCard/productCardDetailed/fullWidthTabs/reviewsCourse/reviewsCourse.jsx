import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useRouteMatch, withRouter} from 'react-router-dom'
import {PRODUCT_CREATE_REVIEW_RESET} from "../../../../../../constants/productConstants";
import {createProductReview} from "../../../../../../redux/actions/productReviewCreateActions";
import Loader from "../../../../../loader"

const ReviewsCourse = () => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const match = useRouteMatch()

    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        error: errorProductReview,
        loading: loadingProductReview,
        success: successProductReview
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
    }, [successProductReview])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
                rating,
                comment
            },
            match.params.category_slug,
            match.params.product_slug
        ))
    }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {
                loading ? <Loader/>
                    : error
                    ? <p>{error}</p>
                    : (
                        <div>
                            <div className='Row'>
                                <div className='Col'>
                                    <h4>Reviews</h4>
                                    {product.reviews.length === 0 &&
                                    <p>No
                                        Reviews</p>}
                                    <div className='ListGroup'>
                                        {product.reviews.map(review => (
                                            <div className='ListGroup-Item' key={review._id}>
                                                <strong>{review.name}</strong>
                                                {/*<Rating value={review.rating}*/}
                                                {/*        color='#f8e825'></Rating>*/}
                                                <p>{review.created_at.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </div>
                                        ))}
                                        <div className='ListGroup-Item'>
                                            <h4>Write a review</h4>

                                            {loadingProductReview && <Loader/>}
                                            {successProductReview &&
                                            <p>Review
                                                Submitted</p>}
                                            {errorProductReview && <p>{errorProductReview}</p>}

                                            {userInfo ? (
                                                <form onSubmit={submitHandler}>
                                                    <div className='Form-Group'>
                                                        <div className='Form-Label'>Rating</div>
                                                        <select
                                                            className='Form-Control'
                                                            value={rating}
                                                            onChange={e => setRating(e.target.value)}
                                                        >
                                                            <option
                                                                value=''>Select...
                                                            </option>
                                                            <option value='1'>1
                                                                - Poor
                                                            </option>
                                                            <option value='2'>2
                                                                - Fair
                                                            </option>
                                                            <option value='3'>3
                                                                - Good
                                                            </option>
                                                            <option value='4'>4
                                                                - Very Good
                                                            </option>
                                                            <option value='5'>5
                                                                - Excellent
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className='Form-Group'>
                                                        <div className='Form-Label'>Review</div>
                                                        <textarea
                                                            row='5'
                                                            value={comment}
                                                            onChange={e => setComment(e.target.value)}
                                                        >
                                                        </textarea>
                                                    </div>

                                                    <button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                    >Submit</button>
                                                </form>
                                            ) : (
                                                <p>Please <Link
                                                    to='/login'>login</Link> to
                                                    write a review</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default withRouter(ReviewsCourse)