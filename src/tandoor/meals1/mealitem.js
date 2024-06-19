import React, { useContext } from 'react';
import './mealitem.css';
import AddForm from './addform';
 import create from '../store1/cart-context'; 

const Mealitem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const ctx = useContext(create);

    const addcart = (amount) => {
        ctx.additem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });

    }


    return (
        <>
            <div className='main'>
                <h3 className='head'>{props.name}</h3>
                <div className="des">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
                <AddForm onadd={addcart}  />
            </div>
        </>
    );
};

export default Mealitem;
