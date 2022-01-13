import React from 'react'


const cart = JSON.parse(sessionStorage.getItem('cartItemKey')) || []
let total = 0

//Calaulate the total price in cart
for(let i = 0; i < cart.length; i++) {
    let str = cart[i][2]
    let priceStr = str.slice(1)
    let price = parseFloat(priceStr)
    total += price
}

//Delete item from cart and session storage 
function deleteItem(e) {
    let itemId = e.target.parentNode.childNodes[1].innerHTML
    cart.map(item => {
        if(itemId === item[1]) {
            let itemIndex = cart.indexOf(item)
            cart.splice(itemIndex, 1)
            sessionStorage.setItem("cartItemKey", JSON.stringify(cart))
            alert(`${item[1]} has been deleted from your cart.`)
            window.location.reload()
        }
        return (
            <h1>{null}</h1>
        )
    })
    
}

//Clear car by clicking pay
function pay() {
    if(cart.length > 1) {
        cart.length = 0
        sessionStorage.setItem("cartItemKey", JSON.stringify(cart))
        alert("All of your items have been payed for.")
        window.location.reload()
    }else {
        alert("You have 0 items in your cart.")
    }
    
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
                    <button className='delete' onClick={deleteItem}>X</button>
                </div>
            )) : <h2 className='empty'>Cart is empty</h2>}
            </div>
            <h3 className='total'>Total: {total === 0 ? 0 : total} </h3>
            <button className='pay' onClick={pay}>Pay</button>
        </>
    )
}

export default Cart

