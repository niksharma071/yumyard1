
import './availmeals.css'
import Mealitem from './mealitem'
import Card from '../UI/body-famousDish'
const meals=[
    {
        id: 1,
        name: "Spicy Mango Shrimp Tacos",
        description: "Succulent shrimp with fresh mango salsa and lime crema in a warm tortilla.",
        price: 12.99
    },
    {
        "id": 2,
        "name": "Herb-Crusted Lamb Chops",
        "description": "Juicy lamb chops with garlic mashed potatoes, seasonal vegetables, and rosemary reduction sauce.",
        "price": 24.99
    },
    {
        "id": 3,
        "name": "Quinoa and Avocado Salad",
        "description": "Nutritious quinoa, ripe avocado, cherry tomatoes, cucumbers, and mixed greens with lemon vinaigrette.",
        "price": 10.99
    },
    {
        "id": 4,
        "name": "Vegan Buddha Bowl",
        "description": "A delightful mix of roasted vegetables, chickpeas, quinoa, and avocado, drizzled with tahini sauce.",
        "price": 11.99
    },
    {
        "id": 5,
        "name": "Gluten-Free Pasta Primavera",
        "description": "Fresh gluten-free pasta with seasonal vegetables in a light tomato basil sauce.",
        "price": 13.99
    },
    {
        "id": 6,
        "name": "Grilled Portobello Mushroom Burger",
        "description": "A hearty portobello mushroom cap grilled to perfection, served with vegan cheese, lettuce, and tomato on a whole-grain bun.",
        "price": 9.99
    },
    {
        "id": 7,
        "name": "Classic Margherita Pizza",
        "description": "Crispy thin crust topped with fresh mozzarella, basil, and our signature tomato sauce.",
        "price": 14.99
    },
    {
        "id": 8,
        "name": "Seared Ahi Tuna",
        "description": "Fresh Ahi tuna seared to perfection, served with a side of wasabi mashed potatoes and sautéed spinach.",
        "price": 21.99
    },
    {
        "id": 9,
        "name": "Chocolate Lava Cake",
        "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
        "price": 7.99
    },
    {
        "id": 10,
        "name": "Berry Bliss Parfait",
        "description": "Layers of fresh berries, Greek yogurt, and granola, topped with a drizzle of honey.",
        "price": 6.99
    }
]
const AvailFood=()=>{
    const dummy=meals.map((m)=><Mealitem Key={m.id} id={m.id} name={m.name} description={m.description} price={m.price}></Mealitem>)
    return(
        <>
        <div>
        
        </div>
        <section className="meals">
           <Card>
           <h1>Famous Dishes</h1>
           {dummy}
           
           </Card>
               
           
        </section>
        </>
    )
}
export default AvailFood;