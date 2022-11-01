import React from 'react'
import '@styles/ShoppingCartItem.scss'
import icons from '@icons/icon_close.png'

const ShoppingCartItem = () => {
    return (
        <div className ="shopping-cart">
            <div className ="shopping-cart" />
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src={icons} alt="close"/>
            <div className ="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                </figure>
                <p>Bike</p>
                <p>$30,00</p>
                <img src={icons} alt="close" />
            </div>
        </div>
    )
}

export default ShoppingCartItem