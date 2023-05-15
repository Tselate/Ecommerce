import React from "react"
import {Link} from "react-router-dom"
import cart from "./cart-svgrepo-com.svg"


function Header() {
    return (
        <div className="header-container">
            <Link to="/" style={{ textDecoration: 'none' }}><h6 className="logo">Merkato Boutique</h6></Link> 
            <Link to="/cart"><img className="cart" src={cart} alt="cart"/></Link>  
        </div>
    )
}

export default Header
