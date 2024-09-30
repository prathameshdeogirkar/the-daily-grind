import React from 'react'
import "./FoodCard.css"

import vegIcon from "./veg-icon.png"
import nonVegIcon from "./non-veg-icon.png"

function FoodCard({ imgUrl, title, description, isVeg, price }) {

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

            {
                price ?
                    <p className='food-card-price'>
                        ₹{price}
                    </p>
                    : 'Not Available'
            }

            <button className='card-button'>
                Add TO Cart
            </button>
        </div>
    )
}

export default FoodCard