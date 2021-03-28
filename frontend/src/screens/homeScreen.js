import React from 'react'
import products from '../products'
import Product from "../components/product"


const HomeScreen = () => {
    return (
        <div>
            <h1>Latest Products</h1>
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    )
}

export default HomeScreen