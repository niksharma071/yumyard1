import React from "react";
import './cartitem.css'
const CartItem=(props)=>{
return(
    <div className="main">
    <div className="cartitem">
        <h2>{props.name}</h2> 
        <span className="price">${props.price}  </span>
        <span className="amount">  x{props.amount}</span>
        <button className="b" onClick={props.onadd}>+</button>
        <button className="b" onClick={props.onremove}>-</button>
    </div>
    </div>
)
}
export default CartItem;