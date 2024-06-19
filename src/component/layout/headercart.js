import image from '../../assests/download.png'
import './headercart.css'
import CartIcon from './carticon'
import { useContext } from 'react'

import create from '../store/cart-context'
const Headercart = (props) => {
    console.log("ji",props.item)
    const cr=useContext( create);
    const no=cr.item.reduce((inital,item)=>{return inital+item.amount},0)
        return (
            <button className="cart-button" onClick={props.onpass}>
                <div >
                    <span className="icon"><CartIcon /></span>
                    <span>Your Cart</span>
                    <span className="badge">{no}</span>
                </div>
            </button>
        );
    }
    
   export default Headercart
