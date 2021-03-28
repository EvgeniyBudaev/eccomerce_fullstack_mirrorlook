import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Product from "../components/product"


const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get('/api/products/')
            setProducts(data)
        }
        fetchProducts()
    }, [])

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