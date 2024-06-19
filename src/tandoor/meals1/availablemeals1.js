import React from 'react';
import Mealitem from './mealitem';
import './availablemeals1.css';
import image from '../../assests/back.jpg';
import Card from '../UI1/bodydish';

const indianMeals = [
    {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken cooked in a rich tomato and butter sauce, flavored with aromatic spices.",
        price: 12.99
    },
    {
        id: 2,
        name: "Palak Paneer",
        description: "Fresh spinach and cottage cheese cubes cooked in a creamy curry sauce with Indian spices.",
        price: 10.99
    },
    {
        id: 3,
        name: "Chicken Biryani",
        description: "Fragrant basmati rice cooked with marinated chicken pieces and aromatic spices, served with raita.",
        price: 14.50
    },
    {
        id: 4,
        name: "Chole Bhature",
        description: "Spiced chickpea curry served with deep-fried bread (bhature), a popular North Indian dish.",
        price: 9.99
    },
    {
        id: 5,
        name: "Masala Dosa",
        description: "Thin rice crepe filled with spiced mashed potatoes, served with coconut chutney and sambar.",
        price: 8.50
    },
    {
        id: 6,
        name: "Paneer Tikka Masala",
        description: "Grilled paneer cubes cooked in a creamy and spicy tomato-based sauce, garnished with cilantro.",
        price: 11.99
    },
    {
        id: 7,
        name: "Aloo Gobi",
        description: "Stir-fried potatoes and cauliflower florets cooked with onions, tomatoes, and Indian spices.",
        price: 9.50
    },
    {
        id: 8,
        name: "Rogan Josh",
        description: "Tender lamb cooked in a rich gravy flavored with Kashmiri spices, served with basmati rice.",
        price: 15.99
    },
    {
        id: 9,
        name: "Pani Puri",
        description: "Crispy puris filled with spiced potato mixture and tangy tamarind water, a popular Indian street food.",
        price: 6.50
    },
    {
        id: 10,
        name: "Gulab Jamun",
        description: "Deep-fried milk solids soaked in sugar syrup, served warm, a classic Indian dessert.",
        price: 5.99
    }
];

const AvailFood = () => {
    const mealItems = indianMeals.map((meal) => (
        <Mealitem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    ));

    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <section className="meal">
                <Card>
                    <h1>Famous Indian Dishes</h1>
                    {mealItems}
                </Card>
            </section>
        </div>
    );
};

export default AvailFood;
