import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import products from "../products"


const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])

    return (
        <div>
            <Link to='/'>Go Back</Link>
            {product.name}
        </div>
    )
}

export default ProductScreen