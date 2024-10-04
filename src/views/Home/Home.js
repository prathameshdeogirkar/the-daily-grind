import React from 'react'
import "./Home.css"

import FoodCard from '../../components/FoodCard/FoodCard'

const foods = [
    {
        id: 1,
        imgUrl: "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?t=st=1727673073~exp=1727676673~hmac=f285ae26d070f23be961f2b86a06af48fad51e31b9151561e66a283f6971ae72&w=996",
        title: "Chicken Dum Biryani",
        description: "Fragrant long rice blended with chicken pieces cooked in dum style with special spices.",
        isVeg: false,
        price: 150
    },
    {
        id: 2,
        imgUrl: "https://img.freepik.com/premium-photo/pav-bhaji-with-squeeze-emon_1179130-576928.jpg?ga=GA1.2.1873058646.1714839885&semt=ais_hybrid",
        title: "Pav Bhaji",
        description: "A flavorful blend of mixed vegetables served over toasted buttery bread.",
        isVeg: true,
        price: 120
    },
    {
        id: 3,
        imgUrl: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices_1029473-529718.jpg?w=996",
        title: "Paneer Tikka",
        description: "tikka coated in a rich and delightful pesto marinade.",
        isVeg:  true,
        price:  120
    },
    {
        id: 3,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisbKOZ6IO1GIhkuXl4DNr22X8bRO98DpXaA&s",
        title: "Choole Poori",
        description: "a North Indian dish of chickpeas in a spiced gravy with a puffy bread.",
        isVeg:  true,
        price:  80
    },
    {
        id: 4,
        imgUrl: "https://img.freepik.com/premium-photo/matar-kulcha-photo-breakfast_1036998-308194.jpg?w=996",
        title: "Aaloo Paratha",
        description: " Indian Breakfast flatbreads made with whole wheat flour, boiled potatoes, spices & herbs.",
        isVeg:  true,
        price:  60
    },
    {
        id: 5,
        imgUrl: "https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27184.jpg?t=st=1727676980~exp=1727680580~hmac=4c37a51a3cd9bddabb25cc5983d9416788eb683c3e5d0f8941d5f7e0599ce400&w=996",
        title: "Veg Fried Rice",
        description: "A delectable Chinese delight packed with flavors and textures.",
        isVeg:  false,
         price:  100
    },
    {
        id: 5,
        imgUrl: "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg?t=st=1727677152~exp=1727680752~hmac=88f65d7c65b669e0787c9421147bd34ba500e88b76120257dc2b183b034142ee&w=996",
        title: "Veg Hakka Noodles",
        description: "Hakka noodles are Indian-Chinese style noodles made with unleavened refined wheat flour.",
        isVeg:  false,
        price:  100
    }
]

function Home() {
    return (
        <div>
            <h1 className='brand-name'>The Daily Grind</h1>

            <div className='food-card-container'>
                {foods.map((foodItem) => {

                    return <FoodCard
                        id={foodItem.id}
                        imgUrl={foodItem.imgUrl}
                        title={foodItem.title}
                        description={foodItem.description}
                        isVeg={foodItem.isVeg}
                        price={foodItem.price}
                    />

                })}




            </div>



        </div>
    )
}

export default Home