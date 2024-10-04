import React, { useState } from 'react'
import "./FoodCard.css"

import vegIcon from "./veg-icon.png"
import nonVegIcon from "./non-veg-icon.png"
import minusIcon from "./minus-icon.png"
import plusIcon from "./plus-icon.png"

function FoodCard({ id, imgUrl, title, description, isVeg, price }) {

    const [quantity, setQuantity] = useState(0);

    const updateQuantity = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        }
        else if (type === "minus" && quantity > 0) {
            setQuantity(quantity - 1);
        }

    }

    const totalPrice = quantity * price;



    return (
        <div className='food-card'>
            <img src={imgUrl}
                className='food-card-image'
                alt='Food' />

            <h2 className='food-card-title'>
                {title}
            </h2>

            <p>{description}</p>

            <img src={isVeg ? vegIcon : nonVegIcon} className='food-card-icon' alt='Veg Icon' />

            <div className='total-price-container'>

                {
                    price ?
                        <p className='food-card-price'>
                            ₹{price}
                        </p>
                        : 'Not Available'
                }

                <p className='totalPrice'>

                     Total: ₹ {totalPrice}
                </p>

            </div>

            <p className='card-msg'>
                {quantity > 10 ? "For bulk orders, delivery time may vary." : null}
            </p>

            <div className='card-quantity-container'>
                <img src={minusIcon} alt='minus' className='card-quantity-icon '
                    onClick={() => {
                        updateQuantity("minus")
                    }} />

                <span className='card-quantity'>{quantity}</span>

                <img src={plusIcon} alt='plus' className='card-quantity-icon'
                    onClick={() => {
                        updateQuantity("plus")
                    }} />
            </div>

            <button className='card-button'>
                Add TO Cart
            </button>
        </div>
    )
}

export default FoodCard