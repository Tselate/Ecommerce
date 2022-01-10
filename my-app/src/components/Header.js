import React from "react"
import {Link} from "react-router-dom"
import cart from "./cart-svgrepo-com.svg"


function Header() {
    return (
        <div className="header-container">
            <Link to="/" style={{ textDecoration: 'none' }}><h6 className="logo">SHAP TIL' U DROP</h6></Link> 
           
        </div>
    )
}

export default Header