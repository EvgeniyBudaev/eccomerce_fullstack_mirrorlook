import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom'
import {listProductDetails} from "../redux/actions/productActions"


const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {error, loading, product} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])


  return (
    <div>
      <Link to='/'>Go Back</Link>
      {
        loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3>
          : <>
            {product.name}
          </>
      }

      <div></div>
      <img src={product.image} alt="" />
    </div>
  )
}

export default ProductScreen