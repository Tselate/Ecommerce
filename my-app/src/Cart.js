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
        <div className='cart-container'>
            {cart[0] ? cart.map(item => (
                <div className='cart-item'>
                    Hello this is a test
                    <img className="itemImg" src={item[0]} alt="Item"/>
                    <p className="itemName">{item[1]}</p>
                    <p className="itemPrice">${item[2]}</p>
                    {console.log(item)}
                </div>
            )) : <h2>Cart is empty</h2>}
            <h3>Total: {total === 0 ? 0 : total} </h3>
            <img src='Dawit.jpg' alt='cart'/>
        </div>
    )
}

export default Cart

