import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <Link to="/">Mirror Look</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
        </header>
    )
}

export default Header