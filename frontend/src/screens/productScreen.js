import React from 'react'
import { Link } from 'react-router-dom'

import products from "../products"


const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)

    return (
        <div>
            <Link to='/'>Go Back</Link>
            {product.name}
        </div>
    )
}

export default ProductScreen