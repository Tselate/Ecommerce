import React from 'react'


const cart = JSON.parse(sessionStorage.getItem('cartItemKey')) || []
let total = 0

for(let i = 0; i < cart.length; i++) {
    let str = cart[i][2]
    let priceStr = str.slice(1)
    let price = parseFloat(priceStr)
    total += price
}


function Cart () {
    return (
        <>
            <div className='cart-container'>
            {cart[0] ? cart.map(item => (
                <div className='cart-item'>
                    <img className="itemImg" src={item[0]} alt="Item"/>
                    <p className="itemCartName">{item[1]}</p>
                    <p className="itemCartPrice">{item[2]}</p>
                </div>
            )) : <h2 className='empty'>Cart is empty</h2>}
            </div>
            <h3 className='total'>Total: {total === 0 ? 0 : total} </h3>
        </>
    )
}

export default Cart

