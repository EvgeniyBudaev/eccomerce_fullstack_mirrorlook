import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Product from "../components/product"
import {listProducts} from "../redux/actions/productActions"


const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Latest Products</h1>
      {
        loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3>
          : <>
            {products.map(product => (
              <Product key={product._id} product={product}/>
            ))}
          </>
      }
    </div>
  )
}


export default HomeScreen