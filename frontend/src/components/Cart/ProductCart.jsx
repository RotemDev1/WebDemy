import React from 'react'

export const ProductCart = (productCart, index) => {
    return (
        <div><li key={index} className="cart-line">
            <h1>{productCart.title}</h1>
            <h2>{productCart.price}$</h2>
            {//delete product from cart
            }
        </li></div>
    )
}
