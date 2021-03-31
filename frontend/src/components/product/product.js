import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {
    return (
        <div>
            <Link to={`/products/${product._id}`}>
                <strong>{product.name}</strong>
            </Link>
        </div>
    )
}

export default Product