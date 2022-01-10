import React from 'react'

const cart = JSON.parse(sessionStorage.getItem('cartItemKey')) || []


function Cart () {
    console.log(cart)

    return (
        <div className='cart-container'>
        
        </div>
    )
}

export default Cart

