


import Modal from '../UI1/modal'
import { useContext } from 'react'
import create from '../store1/cart-context'
import './cart.css'
import CartItem from './cartitem'
import { useNavigate } from 'react-router-dom'
const Cart=(props) =>{
    const navigate=useNavigate()
    
    const crx=useContext(create);
    const additem=(item)=>{};
    const removeitem=(id)=>{};
    const total=`$${crx.totalamount.toFixed(2)}`;
    console.log("hi",crx.item)
    console.log("hi2",crx.additem)
    const func=()=>{
        
         if(crx.item.length>0){
            navigate('/orderplace');
         }
         else{
            props.oncancel();
         }
         
    }
    const cartadditem=(item)=>{
    crx.additem({...item,amount:1})
    }
    const cartremoveitem=(id)=>{
    crx.removeitem(id)
    }

const cartitem=(
    
    <ul>
        {crx.item.map((item)=>(<li>{<CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onadd={cartadditem.bind(null,item)} onremove={cartremoveitem.bind(null,item.id)}/>}</li>))}
    </ul>
)
return(
    <>
    <Modal  >
        {cartitem}
        <div className='total'>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className='action'>
        <button className='butt1'onClick={func} >Order</button>
        <button className='Butt'onClick={props.oncancel}>Cancel</button>
        </div>
    </Modal>
    
    </>
)
}
export default Cart